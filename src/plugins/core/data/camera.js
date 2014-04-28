// A camera acts as a 'viewport' for a canvas.
define(["data"], function (data) {

    var Camera = function () {

        // The x offset (in pixels) from the center of the camera.
        this.x = 0;

        // The y offset (in pixels) from the center of the camera.
        this.y = 0;

        // The current zoom state of the camera
        this.zoom = 1;

        // The minimum zoom distance of the camera
        this.minZoom = 0.125;

        // The maximum zoom distance of the camera
        this.maxZoom = 1;

        // The amount of zoom to adjust each 'step'
        this.zoomStep = 0.125;
    };

    Camera.prototype = {

        withinView: function(visual) {
            
        }
    };

    return data.define("camera", Camera);
});