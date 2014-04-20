// A simple 2d rectangle.
define(["data"], function (data) {

    var Rectangle = function () {

        // The x position offset relative to the rectangle's context (if applicable).
        this.x = 0;

        // The y position offset relative to the rectangle's context (if applicable).
        this.y = 0;

        // The total width in pixels of the rectangle.
        this.width = 0;

        // The total height in pixels of the rectangle.
        this.height = 0;

        // Color that the rectangle should be drawn (if applicable).
        this.color = "";

        // The color of the rectangle's border
        this.border = "";
    };

    return data.define("rectangle", Rectangle);
});