// Represents a button in a hotkey bar
define(["data"], function (data) {

    var Button = function () {

        this.index = 0;

        // The id of the hotkey bar that contains this button
        this.bar = 0;

        // The image that this icon should display
        this.icon = "";
    };

    return data.define("hotkeys", "button", Button);
});