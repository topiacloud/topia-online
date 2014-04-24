// A renderable circle shape
define(["data"], function (data) {

    var Circle = function () {

        // (Required) The x position offset relative to the circle's context (if applicable).
        this.x = 0;

        // (Required) The y position offset relative to the circle's context (if applicable).
        this.y = 0;

        // (Required) The length in pixels of the circle's radius
        this.radius = 0;

        // (Optional) The inner color of the circle
        this.color = "black";

        // (Optional) The border color of the circle
        this.border = "";

        // (Optional) The width of the circle's border, if applicable
        this.borderWidth = 1;
    };

    return data.define("circle", Circle);
});