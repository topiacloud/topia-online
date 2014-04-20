define(["engine/memory", "engine/events", "engine/store"], function (memory, events, Store) {

    var stores = {};

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

    var Data = function (containerName, key) {
        if (!key) {
            key = containerName;
            containerName = "core";
        }

        var container = stores[containerName];

        if (!container) {
            container = stores[containerName] = {};
        }

        if (!container[key]) {
            container[key] = new Store(key, function() {});
        }

        return container[key];
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

    Data.define = function (container, key, type) {

        if (!type) {
            type = key;
            key = container;
            container = "core";
        }

        if (!stores.hasOwnProperty(container)) {
            stores[container] = {};
        }

        if (!stores[container].hasOwnProperty(key)) {
            return stores[container][key] = new Store(key, type);
        }
        else {
            return stores[container][key].setType(type);
        }
    };

    return Data;
});