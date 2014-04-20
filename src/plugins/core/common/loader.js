// Simple asset loader class
define(function() {

    var bind = function(img, eventName, eventHandler) {
        if (img.addEventListener) {
            img.addEventListener(eventName, eventHandler, false);
        } else if (img.attachEvent) {
            img.attachEvent("on" + eventName, eventHandler);
        }
    };

    var unbind = function(img, eventName, eventHandler) {
        if (img.removeEventListener) {
            img.removeEventListener(eventName, eventHandler, false);
        } else if (img.detachEvent) {
            img.detachEvent("on" + eventName, eventHandler);
        }
    };

    var Loader = function() {
        this.loaded = false;
    };

    Loader.prototype = {

        load: function(url, callback) {
            var image = new Image();

            var unbindEvents;

            var onLoad = function() {
                this.loaded = true;

                var canvas = document.createElement("canvas");
                canvas.width = image.width;
                canvas.height = image.height;

                var context = canvas.getContext("2d");
                context.drawImage(image, 0, 0);

                callback(url, canvas);
                unbindEvents();
            };

            var onError = function(e) {
                unbindEvents();
                throw "Failed to load image!";
            };

            var onReadyStateChange = function() {
                if (image.readyState === "complete") {
                    onLoad();
                }
            };

            unbindEvents = function() {
                unbind(image, "load", onLoad);
                unbind(image, "readystatechange", onReadyStateChange);
                unbind(image, "error", onError);

                image = null;
            };

            bind(image, "load", onLoad);
            bind(image, "readystatechange", onReadyStateChange);
            bind(image, "error", onError);

            image.src = url;
        }
    };

    return Loader;
});