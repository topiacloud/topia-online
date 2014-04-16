define(["./cache", "preloadjs"], function (cache, preloadjs) {

    var queue = new preloadjs.LoadQueue(false);

    var get = function(url) {
        return cache.get("image/" + url);
    };

    var set = function (url, data) {
        return cache.set("image/" + url, data);
    };

    queue.on("complete", function () {
    }, this);

    queue.on("fileload", function (e) {

        var entry = get(e.item.src);
        entry.file = e.result;
        entry.loaded = true;
        entry.loading = false;

        _.each(entry.callbacks, function (callback) {
            callback(e.result);
        });

        entry.callbacks = [];
    }, this);

    queue.on("error", function (e) {
    }, this);

    queue.load();

    return {
        
        get: function(url) {
            return get(url).file;
        },

        load: function (url, callback) {

            var cachedImage = get(url) || set(url, { callbacks: [], loaded: false, loading: false, file: null });

            if (cachedImage.loaded) {
                callback(cachedImage.file);
                return;
            } else {
                cachedImage.callbacks.push(callback);
            }

            if (!cachedImage.loading) {
                cachedImage.loading = true;
                queue.loadFile(url);
            }
        }
    };
});