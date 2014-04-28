// Drawable which fills the canvas with a texture
define(["data"], function (data) {

    var Fill = function () {

        // (Required) The id of the canvas to apply the fill to
        this.canvas = 0;

        // (Required) The color to fill with
        this.color = "black";

        // (Optional) A composite canvas operation
        this.composite = "";

        // (Optional) The z-index for the drawing order of this fill
        this.index = 0;
    };

    return data.define("fill", Fill);
});