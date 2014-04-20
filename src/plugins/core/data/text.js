// A simple string of text, meant to be positioned and rendered on a surface.
define(["data"], function (data) {

    var Text = function () {

        // The x position offset relative to the context.
        this.x = 0;

        // The y position offset relative to the context.
        this.y = 0;

        // This is the actual text that should be displayed
        this.text = "";

        // Sets the color of the text
        this.color = "";
    };

    return data.define("text", Text);
});