// Indicates that an object should respond to certain events
define(["data"], function (data) {

    var Reaction = function () {

        // The type of object that should react to events
        this.type = "";

        // The id of the object that should react to events
        this.target = 0;

        // The type of event that the object should react to
        // Options:  "touch"
        this.action = "";
    };

    return data.define("reaction", Reaction);
});