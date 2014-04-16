define(["./identity", "./memory", "./events"], function (identity, memory, events) {

    var stores = {};

    var Store = function (name, type) {

        var store = this;

        this.type = type;
        this.pool = [];
        this.name = name;
        this.total = 0;
        this.items = {};
        this.indexes = {};
        this.events = events.create({ context: this });

        this.type.prototype = {
            save: function () {
                store.save(this);
            }
        };
    };

    Store.prototype.define = function (definition) {
        _.extend(this, definition);
        return this;
    };

    Store.prototype.firstOrNew = function () {
        return this.first() || this.create();
    };

    Store.prototype.create = function() {
        return this.pool.pop() || new this.type();
    };

    Store.prototype.on = function (channel, callback) {
        
        if (!callback) {
            if (_.isFunction(channel)) {
                return this.events.on("save", channel);
            } else {
                throw "Missing callback for " + this.name + ".on(" + channel + ")";
            }
        }

        return this.events.on(channel, callback);
    };

    Store.prototype.save = function (item) {

        if (!item) {
            return null;
        }

        var isNew = !item.id;

        if (isNew) {
            var template = new this.type();

            for (var field in template) {
                if (!item.hasOwnProperty(field)) {
                    item[field] = template[field];
                }
            }

            if (!item.id) {
                item.id = identity.next(this.name);
            }
        }

        // Have we reached capacity?
        if (this.capacity && Object.keys(this.items).length >= this.capacity) {
            for (var each in this.items) {
                this.remove(each);
                break;
            }
        }

        if (isNew) {
            this.items[item.id] = item;
            this.total += 1;
            this.events.publish("add", item);
        }

        this.events.publish("save", item);

        return item;
    };

    Store.prototype.remove = function (item) {
        if (this.pool.length < 100) {
            if (item.id) {
                this.events.publish("remove", item);
                delete this.items[item.id];
                delete item.id;
                this.pool.push(item);
            }
        }
    };

    Store.prototype.clear = function() {
        var store = this;

        _.each(this.items, function(item) {
            store.remove(item);
        });
    };

    Store.prototype.first = function (criteria) {
        if (criteria) {
            for (var each in this.items) {
                
                var match = true;

                for (var field in criteria) {
                    if (this.items[each][field] !== criteria[field]) {
                        match = false;
                    }
                }

                if (match) {
                    return this.items[each];
                }
            }

            return null;
        }

        for (var first in this.items) {
            return this.items[first];
        }
    };

    Store.prototype.each = function (criteria, callback) {
        if (_.isFunction(criteria)) {
            return _.each(this.items, criteria);
        }

        return _.each(_.where(this.items, criteria), callback);
    };

    Store.prototype.get = function (criteria) {

        if (criteria) {
            if (_.isObject(criteria)) {
                return _.where(this.items, criteria);
            }

            return this.items[criteria];
        }

        return _.toArray(this.items);
    };

    var getMemory = function () {
        var bytes = 0;

        _.each(stores, function (store) {
            bytes += memory.get(store.items);
        });

        return bytes;
    };

    var getStatus = function () {

        var status = {
            memory: getMemory(),
            totalObjects: 0,
            totalStores: 0,
            stores: {
            }
        };

        for (var each in stores) {
            var count = stores[each].total;

            status.totalStores += 1;
            status.totalObjects += count;

            status.stores[each] = {
                total: count,
                data: stores[each].items
            };
        }

        return status;
    };

    var Data = function (name) {
        return stores[name];
    };

    Data.stores = function() {
        return stores;
    };

    Data.status = function () {
        return getStatus();
    };

    Data.clear = function() {
        _.each(stores, function(store) {
            store.clear();
        });
    };

    Data.define = function (key, type) {

        if (stores.hasOwnProperty(key)) {
            throw "Data store already defined: " + key;
        }

        return stores[key] = new Store(key, type);
    };

    return Data;
});