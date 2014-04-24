// A panel containing a series of clickable hotkeys
define(["data"], function (data) {

    var Bar = function () {

        // The number of buttons on the hotkey
        this.buttons = 5;
        
        // The direction that the hotkeys should flow
        // Options:  "horizontal" or "vertical"
        this.orientation = "horizontal";

        // Whether the hotkeys should be labelled
        // Options:  "none", "numeric", "alpha", or "custom"
        this.label = "numeric";
        
        // The id of the 'positioning' strategy for the bar
        this.position = 0;

        // The width in pixels of each button
        this.buttonWidth = 64;

        // The height in pixels of each button
        this.buttonHeight = 64;
    };

    return data.define("hotkeys", "bar", Bar);
});