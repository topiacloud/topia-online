// A frame represents the flow of game time, and is updated up to 60 times per second.
define(["data"], function (data) {

    var Option = function () {

        // The name of the option setting
        this.name = "";

        // The value of the option setting
        this.value = false;
    };

    return data.define("option", Option);
});