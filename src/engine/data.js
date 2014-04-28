define(["engine/memory", "engine/container"], function (memory, Container) {

    var index = 0;
    var store = {};

    /*var getMemory = function () {
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
    };*/

    var Data = function (containerName, key) {

        if (key) {
            if (!Data[containerName]) {
                Data[containerName] = {};
            }

            if (!Data[containerName][key]) {
                Data[containerName][key] = new Container(key, function() {}, Data);
            }

            return Data[containerName][key];
        } else {
            if (!Data[containerName]) {
                Data[containerName] = new Container(key, function() {}, Data);
            }

            return Data[containerName];
        }
    };

    /*Data.clear = function() {
        _.each(this, function(store) {
            store.clear();
        });
    };*/

    Data.get = function(id) {
        return store[id][1];
    };

    Data.intercept = function(item, interceptor) {
        store[item.id][0].intercept(item, interceptor);
    },

    Data.add = function(container, item) {

        var added = false;

        if (!item.hasOwnProperty("id")) {
            item.id = (index += 1);
            added = true;

            store[item.id] = [container, item];
        }

        return added;
    };

    Data.remove = function (id) {
        delete store[id];
    };

    Data.define = function (namespace, key, type) {

        var container = Data;

        if (!type) {
            type = key;
            key = namespace;
        } else {
            container = Data[namespace];
        
            if (!container) {
                container = Data[namespace] = {};
            }
        }

        if (!container.hasOwnProperty(key)) {
            return container[key] = new Container(key, type, Data);
        }
        else {
            return container[key].setType(type);
        }
    };

    return Data;
});