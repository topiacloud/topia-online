// A panel is a simple HTML container with basic windowing features.
define(["data"], function (data) {

    var Panel = function () {

        // The text contained within the header of the panel.
        this.title = "";

        // Whether the window frame borders should be displayed
        this.frame = true;

        // The id of the 'source' of data that this panel represents
        this.source = 0;

        // The absolute x position of the panel relative to the document.
        this.x = 0;

        // The absolute y position of the panel relative to the document.
        this.y = 0;

        // Whether the window can be resized by the user.
        this.resizable = false;

        // URL of the .html template for the panel's inner content.
        this.template = "";
    };

    return data.define("panel", Panel);
});