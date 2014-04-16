// This is a store for 'canvas' data.  A canvas represents a drawable surface.
define(["../common/data"], function (data) {

    var Canvas = function () {

        // The x offset (in pixels) of the canvas element relative to the left-most of the document.
        this.x = 0;

        // The y offset (in pixels) of the canvas element relative to the top-most of the document.
        this.y = 0;

        // The total width of the drawable surface of the canvas element.
        this.width = 0;

        // The total height of the drawable surface of the canvas element.
        this.height = 0;

        // Indicates whether the canvas should remain offscreen.  The x and y properties are ignored if this is 'true'.
        this.offscreen = false;
    };

    return data.define("canvas", Canvas);
});