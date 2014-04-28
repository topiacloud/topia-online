// A 2d grid layout
define(["data"], function (data) {

    var Grid = function () {

        // the currently selected cell within the grid
        this.selected = null;

        // The x position offset relative to the grid's context (if applicable).
        this.x = 0;

        // The y position offset relative to the grid's context (if applicable).
        this.y = 0;

        // Internal position variable X
        this.prevX = null;

        // Internal position variable Y
        this.prevY = null;

        // Internal color variable (?)
        this.prevColor;

        // The total width in elements of the grid.
        this.width = 0;

        // The total height in elements of the grid.
        this.height = 0;

        // The width of individual elements of the grid.
        this.cellWidth = 0;

        // The height of individual elements of the grid.
        this.cellHeight = 0;

        // the color of the grid
        this.color = "";
    };

    return data.define("grid", Grid);
});