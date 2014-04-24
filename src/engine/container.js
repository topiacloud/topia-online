define(["engine/observer"], function(Observer) {

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

    var Container = function(name, type, registry) {

        this.registry = registry;
        this.firstItem = null;
        this.lastItem = null;
        this.changeList = [];
        this.listeners = [];
        this.callbacks = { add: [], remove: [] };
        this.store = {};
        this.index = 0;
        this.poolCapacity = 50;
        this.pool = [];
        this.name = name;
        this.template = null;
        this.type = null;

        this.setType(type);

        containers[name] = this;
    };

    Container.prototype = {

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

            if (arguments.length) {
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

                var result = this.store[criteria];

                return result != null ? result.value : null;
            }

            return _.map(_.toArray(this.store), function(each) { return each.value; } );
        },

        firstOrNew: function (criteria) {
            return this.first(criteria) || this.create();
        },

        firstOrAdd: function (criteria) {
            return this.first(criteria) || this.add(this.create());
        },

        create: function() {
            /*var item = this.pool.pop();

            if (item) {
                this.template.call(item);

                return item;
            }*/

            return this.add(new this.type());
        },

        changed: function(item) {
            globalChanges[this.name] = true;
            this.changeList.push(item);
        },

        save: function(item) {
            
            /*if (item.id && this.store[item.id]) {
                this.changed(this.store[item.id].observer);
            }*/

            var added = this.add(item);

            this.changed(this.store[item.id].observer);
            this.commit();

            return added;
        },

        add: function(item) {

            if (this.registry.add(item)) {
                
                // Todo:  This is ugly and needs to change in the future
                for (var defaultField in this.template) {
                    if (!item.hasOwnProperty(defaultField)) {
                        item[defaultField] = this.template[defaultField];
                    }
                }
            }

            if (!this.store.hasOwnProperty(item.id)) {
                var observer = new Observer(item, this);
                var entry = this.store[item.id] = { value: item, next: null, previous: this.lastItem, observer: observer };

                if (!this.firstItem) {
                    this.firstItem = entry;
                }

                if (this.lastItem) {
                    this.lastItem.next = entry;
                }

                this.lastItem = entry;

                for (var field in this.callbacks) {
                    if (field == "save" || field == "add" || field == "remove") {
                        continue;
                    }

                    observer.observe(field);
                }

                this.changeList.push(entry.observer);
                this.commit();
            }

            return item;
        },

        remove: function(item) {
            var store = this;

            if (_.isArray(item)) {
                _.each(item, function(each) {
                    store.remove(each);
                });

                return;
            }

            if (!item.id) {
                item = this.store[item];
            } else {
                item = this.store[item.id];
            }

            if (item) {

                this.registry.remove(item.value.id);

                this.total -= 1;

                item.observer.changes.push("remove");
                this.changeList.push(item.observer);
                this.commit();

                delete this.store[item.value.id];

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

            _.each(this.store, function(item) {
                container.remove(item);
            });
        },

        each: function(criteria, callback) {
            if (!this.firstItem) {
                return;
            }

            var node = this.firstItem;

            if (callback && criteria) {
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
            }
            else if (criteria && _.isFunction(criteria)) {
                callback = criteria;

                while (node != null) {
                    callback(node.value);

                    node = node.next;
                }
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
                        self.store[item.id].observer.observe(field);
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