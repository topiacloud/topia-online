// A camera acts as a 'viewport' for a canvas.
define(["data"], function (data) {

    var Camera = function () {

        // The x offset (in pixels) from the center of the camera.
        this.x = 0;

        // The y offset (in pixels) from the center of the camera.
        this.y = 0;

        // The id of the canvas that this camera should visualize
        this.canvas = 0;

        // (Internal) The width of the camera (set from the canvas width)
        //this.width = 0;

        // (Internal) The height of the camera (set from the canvas height)
        //this.height = 0;
    };

    return data.define("camera", Camera);
});