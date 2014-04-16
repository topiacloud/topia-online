// A key press event from the keyboard.
define(["../common/data"], function (data) {

    var KeyPress = function () {

        // The button identifier.  Can lookup using core/common/keyboard.
        this.button = 0;

        // The time the press occurred.
        this.time = 0;

        // The status of the key event.
        // Options:  ["press", "down", "up"]
        this.state = "";
    };

    return data.define("keypress", KeyPress);
});