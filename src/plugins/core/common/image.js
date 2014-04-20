define(["preloadjs"], function (preloadjs) {

    var queue = new preloadjs.LoadQueue(false);
    var cache = {};

    var get = function(url) {
        return cache["image/" + url];
    };

    var set = function (url, data) {
        return cache["image/" + url] = data;
    };

    queue.on("complete", function () {
    }, this);

    queue.on("fileload", function (e) {

        var canvas = document.createElement("2d");
        canvas.width = e.item.width;
        canvas.height = e.item.height;

        var context = canvas.getContext("2d");
        context.drawImage(e.item, 0, 0);

        var entry = get(e.item.src);
        entry.loaded = true;
        entry.loading = false;

        _.each(entry.callbacks, function (callback) {
            callback(canvas);
        });

        entry.callbacks = [];
    }, this);

    queue.on("error", function (e) {
    }, this);

    queue.load();

    return {
        
        load: function (url, callback) {

            var cachedImage = get(url) || set(url, { callbacks: [], loaded: false, loading: false });

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