// This is a store for 'canvas' data.  A canvas represents a drawable surface.
define(["data", "../common/cache", "../common/screen"], function (data, cache, screen) {

    var Canvas = function () {

        // The x offset (in pixels) of the canvas element relative to the left-most of the document.
        this.x = 0;

        // The y offset (in pixels) of the canvas element relative to the top-most of the document.
        this.y = 0;

        // The total width of the drawable surface of the canvas element.
        this.width = 0;

        // The total height of the drawable surface of the canvas element.
        this.height = 0;
    };

    Canvas.prototype = {

        maximize: function() {
            var canvas = this.getCanvas();
            var size = screen.getSize();

            this.width = canvas.width = size[0];
            this.height = canvas.height = size[1];
        },

        setCanvas: function(canvas) {
            cache.set("canvas" + this.id, canvas);
        },

        getCanvas: function() {
            return cache.get("canvas" + this.id);
        },

        getContext: function() {
            return this.getCanvas().getContext("2d");
        },

        fill: function(style) {
            var context = this.getContext();

            if (context) {
                context.fillStyle = style.toString();
                context.fillRect(0, 0, this.width, this.height);
            }
        }
    };

    return data.define("canvas", Canvas);
});