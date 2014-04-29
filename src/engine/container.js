define(["engine/node"], function(Node) {

    var containers = {};
    var globalChanges = {};

    // Global commit function
    var commit = function() {
        var changes = globalChanges;
        globalChanges = {};

        for (var container in changes) {
            containers[container].commit();
        }
    };

    var Index = function(field) {
        this.field = field;
        this.map = {};
    };

    Index.prototype = {

        remove: function(entity) {
            var mapping = this.map[entity[this.field]];

            if (mapping) {
                mapping.splice(mapping.indexOf(entity), 1);
            }
        },

        add: function(entity) {
            var value = entity[this.field];

            if (_.isUndefined(value)) {
                return;
            }

            var index = this.map[value];

            if (!index) {
                index = this.map[value] = [];
            }

            index.push(entity);
        },

        update: function(entity, oldValue) {

            var oldIndex = this.map[oldValue];

            if (oldIndex) {
                oldIndex.splice(oldIndex.indexOf(entity), 1);
            }

            this.add(entity);
        },

        get: function(value) {
            if (!this.map[value]) {
                return [];
            }

            return this.map[value];
        },

        first: function(value) {
            return _.first(this.get(value));
        },

        each: function(value, callback) {
            _.each(this.get(value), function(visual) {
                callback(visual);
            });
        }
    };

    var Container = function(name, type, registry) {

        this.indexes = {};
        this.registry = registry;
        this.firstItem = null;
        this.lastItem = null;
        this.changeList = [];
        this.listeners = [];
        this.callbacks = { add: [], remove: [] };
        this.nodes = {};
        this.poolCapacity = 50;
        this.pool = [];
        this.name = name;
        this.template = null;
        this.type = null;
        this.total = 0;

        this.setType(type);

        containers[name] = this;
    };

    Container.prototype = {

        index: function(field) {
            if (!this.indexes[field]) {
                var index = this.indexes[field] = new Index(field);

                this.each(function(entity) {
                    index.add(entity);
                });
            }

            return this.indexes[field];
        },

        iterate: function(callback) {
            if (!this.firstItem) {
                return;
            }

            var node = this.firstItem;

            while (node != null) {
                if (callback(node)) {
                    node = node.next;
                } else {
                    break;
                }
            }
        },

        setType: function(type) {
            var container = this;

            this.type = (type || function() {});

            this.type.prototype.save = function() {
                container.save(this);
            };

            this.template = new this.type();
        },

        match: function(entry, criteria) {

            var match = true;

            for (var field in criteria) {
                if (entry.value[field] !== criteria[field]) {
                    match = false;
                    break;
                }
            }

            return match;
        },

        first: function(criteria) {
            var self = this;

            if (criteria) {
                if (_.isObject(criteria)) {

                    var result = null;

                    this.iterate(function(each) {
                        if (self.match(each, criteria)) {
                            result = each;
                            return false;
                        }

                        return true;
                    });

                    return result != null ? result.value : result;
                }
                else if (_.isNumber(criteria)) {
                    return this.get(criteria);
                }
            }

            return this.firstItem != null ? this.firstItem.value : null;
        },

        get: function(criteria) {
            var self = this;

            if (_.isObject(criteria)) {
                var results = [];

                this.iterate(function(each) {
                    if (self.match(each, criteria)) {
                        results.push(each.value);
                    }

                    return true;
                });

                return results;
            }
            else if (_.isNumber(criteria)) {
                return this.find(criteria);
            }

            return _.map(_.toArray(this.nodes), function(each) { return each.value; } );
        },

        find: function(criteria) {
            return this.nodes[criteria].value;
        },

        firstOrNew: function (criteria) {
            return this.first(criteria) || this.create(criteria);
        },

        create: function (criteria) {
            return this.add(criteria);
        },

        changed: function(item, existingChanges, field, oldValue, newValue) {
            if (existingChanges == 0) {
                globalChanges[this.name] = true;
                this.changeList.push(item);
            }

            if (this.indexes.hasOwnProperty(field) && oldValue !== newValue) {
                this.indexes[field].update(item.proxy, oldValue);
            }
        },

        save: function(item) {
            
            /*if (item.id && this.nodes[item.id]) {
                this.changed(this.nodes[item.id].observer);
            }*/

            var added = this.add(item);

            this.changed(this.nodes[item.id].observer);
            this.commit();

            return added;
        },

        add: function(item) {

            if (this.registry.add(this, item)) {
                
                // Todo:  This is ugly and needs to change in the future
                for (var defaultField in this.template) {
                    if (!item.hasOwnProperty(defaultField)) {
                        item[defaultField] = this.template[defaultField];
                    }
                }
            }

            if (!this.nodes.hasOwnProperty(item.id)) {
                var node = this.nodes[item.id] = new Node(item, this);

                this.total += 1;

                for (var index in this.indexes) {
                    this.indexes[index].add(item);
                }

                if (!this.firstItem) {
                    this.firstItem = node;
                }

                if (this.lastItem) {
                    this.lastItem.next = node;
                }

                this.lastItem = node;

                for (var field in this.callbacks) {
                    if (field == "save" || field == "add" || field == "remove") {
                        continue;
                    }

                    node.observer.observe(field);
                }

                this.changeList.push(node.observer);
                this.commit();
            }

            return item;
        },

        intercept: function(item, interceptor) {
            this.nodes[item.id].observer.intercept(interceptor);
        },

        remove: function(item) {
            var container = this;

            if (_.isArray(item)) {
                _.each(item, function(each) {
                    container.remove(each);
                });

                return;
            }

            if (item.id) {
                item = this.nodes[item.id];
            } else {
                item = this.nodes[item];
            }

            if (item) {

                for (var index in this.indexes) {
                    this.indexes[index].remove(item.value);
                }

                this.registry.remove(item.value.id);

                this.total -= 1;

                item.observer.changes.push("remove");
                this.changeList.push(item.observer);
                this.commit();

                delete this.nodes[item.value.id];

                // Todo:  Implement object pooling
                /*delete item.observer;

                if (this.pool.length < this.poolCapacity) {
                    delete item.id;
                    this.pool.push(item);
                }*/

                if (item.previous) {
                    item.previous.next = item.next;
                }
                
                if (item.next) {
                    item.next.previous = item.previous;
                }

                if (item == this.firstItem) {
                    this.firstItem = item.next;
                }

                if (item == this.lastItem) {
                    this.lastItem = item.previous;
                }

                item.observer.dispose();

                delete item.observer;
                delete item.next;
                delete item.previous;
            }
        },

        clear: function() {
            var container = this;

            for (var each in this.nodes) {
                container.remove(each);
            }
        },

        each: function(criteria, callback) {

            var node = this.firstItem;

            if (_.isFunction(criteria)) {

                while (node != null) {
                    criteria(node.value);

                    node = node.next;
                }

                return;
            }

            while (node != null) {
                var match = true;

                for (var field in criteria) {
                    if (node.value[field] !== criteria[field]) {
                        match = false;
                        break;
                    }
                }

                if (match) {
                    callback(node.value);
                }

                node = node.next;
            }
        },

        on: function(field, callback, listener) {
            var self = this;

            if (!listener) {
                this.listeners[this.listeners.length] = callback;
                listener = this.listeners.length;
            }

            if (_.isArray(field)) {
                _.each(field, function(eachField) {
                    self.on(eachField, callback, listener);
                });

                return;
            }

            if (!(field in this.callbacks)) {
                this.callbacks[field] = [];

                if (field != "add" && field != "remove" && field != "save") {
                    this.each(function(item) {
                        self.nodes[item.id].observer.observe(field);
                    });
                }
            }

            this.callbacks[field].push(listener-1);
        },

        commit: function() {
            if (this.changeList.length) {

                var committed = this.changeList;
                this.changeList = [];

                for (var change = 0, len = committed.length; change < len; change++) {
                    var item = committed[change];
                    var changes = item.changes;

                    item.clearChangeset();

                    var listeners = this.getListeners(changes);

                    for (var listener in listeners) {
                        
                        if (!item || !item.proxy) {
                            return;
                        }

                        var callback = this.listeners[listener];
                        callback(item.proxy);

                        commit();
                    }
                }
            }
        },

        getListeners: function(changes) {
            var callbacks = {};
            var self = this;

            _.each(changes, function(field) {
                _.each(self.callbacks[field], function(listener) {
                    callbacks[listener] = true;
                });
            });

            return callbacks;
        }
    };

    return Container;
});