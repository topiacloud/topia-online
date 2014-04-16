// A render operation for drawing to a surface
define(["../common/data"], function (data) {

    var Render = function () {

        // Id of the canvas that the render is associated with.
        this.canvas = 0;

        // Underlying data type for this render operation
        this.fps = 0;
    };

    return data.define("render", Render);
});