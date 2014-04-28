// Indicates that an object should respond to certain events
define(["data"], function (data) {

    var Touchable = function () {

        // The type of object that should react to touch events
        this.type = "";

        // The id of the object that should react to touch events
        this.target = 0;
    };

    return data.define("touchable", Touchable);
});