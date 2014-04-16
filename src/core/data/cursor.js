// The cursor represents the mouse (or touch) position.
define(["../common/data"], function (data) {

    var Cursor = function () {

        // The x position of the input relative to the top-left of the document.
        this.x = 0;

        // The y position of the input relative to the top-left of the document.
        this.y = 0;

        // The id of the DOM element (if any) that the mouse is over
        //this.element = null;
    };

    return data.define("cursor", Cursor);
});