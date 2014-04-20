// Todo:  Rename this to something else which avoids conflicts.  A window is a simple HTML container with basic windowing features.
define(["data"], function (data) {

    var Window = function () {

        // The text contained within the header of the window.
        this.title = "";

        // The absolute x position of the ui relative to the document.
        this.x = 0;

        // The absolute y position of the ui relative to the document.
        this.y = 0;

        // Whether the window can be resized by the user.
        this.resizable = false;

        // URL of the .html template for the window's inner content.
        this.template = "";
    };

    return data.define("window", Window);
});