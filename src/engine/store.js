// Simple in-memory storage table
define(["engine/identity", "engine/events"], function(identity, events) {

    var Store = function (name, type) {

        this.setType(type);

        this.pool = [];
        this.name = name;
        this.total = 0;
        this.items = {};
        this.indexes = {};
        this.events = events.create({ context: this });
    };

    Store.prototype.setType = function (type) {
        var store = this;

        this.type = type || function() {};

        this.type.prototype.save = function() {
            store.save(this);
        };
    };

    Store.prototype.define = function (definition) {
        _.extend(this, definition);
        return this;
    };

    Store.prototype.firstOrNew = function (criteria) {
        return this.first(criteria) || this.create();
    };

    Store.prototype.create = function() {
        var existing = this.pool.pop();

        if (existing) {
            this.type.call(existing);

            return existing;
        }

        return new this.type();
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
            item = {};
        }

        var isNew = !item.id;

        if (isNew) {
            var template = new this.type();

            for (var field in template) {
                if (!item.hasOwnProperty(field)) {
                    item[field] = template[field];
                }
            }

            item.id = identity.next(this.name);
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

        var store = this;

        if (_.isArray(item)) {
            _.each(item, function(each) {
                store.remove(each);
            });

            return;
        }

        if (!item.id) {
            item = this.items[item];
        } else {
            item = this.items[item.id];
        }

        if (item) {
            this.total -= 1;
            this.events.publish("remove", item);
            delete this.items[item.id];

            if (this.pool.length < 100) {
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
            if (_.isObject(criteria)) {
                return _.findWhere(this.items, criteria);
            }
            else if (_.isNumber(criteria)) {
                return this.get(criteria);
            }
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

    return Store;
});