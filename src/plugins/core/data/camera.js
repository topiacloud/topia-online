// A camera acts as a 'viewport' for a canvas.
define(["data"], function (data) {

    var Camera = function () {

        // The world x offset (in pixels) from the center of the camera.
        this.x = 0;

        // The world y offset (in pixels) from the center of the camera.
        this.y = 0;

        // The current zoom state of the camera
        this.zoom = 1;

        // The minimum zoom distance of the camera
        this.minZoom = 0.125;

        // The maximum zoom distance of the camera
        this.maxZoom = 1;

        // The amount of zoom to adjust each 'step'
        this.zoomStep = 0.125;

        // (Internal) The full width/height of the camera, based on the associated canvas size
        this.width = 0;
        this.height = 0;

        // (Internal) Canvas bounds, set internally based on context
        // Example:  [left, top, right, bottom]
        this.bounds = null;

        //this._x = 0;
        //this._y = 0;
        //this._width = 0;
        //this._height = 0;
    };

    Camera.prototype = {

        withinView: function(visual) {
            
        }
    };

    return data.define("camera", Camera);
});