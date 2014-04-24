// A renderable line
define(["data"], function (data) {

    var Line = function () {

        // (Required) The x offset of the line's starting point
        this.x = 0;

        // (Required) The y offset of the line's starting point
        this.y = 0;

        // (Required) The x offset of the line's end point
        this.x2 = 0;

        // (Required) The y offset of the line's end point
        this.y2 = 0;

        // (Optional) The color of the line
        this.color = "black";

        // (Optional) The width of the line
        this.lineWidth = 1;
    };

    return data.define("line", Line);
});