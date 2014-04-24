// A tick represents the flow of game time, and is updated every 50 milliseconds
define(["data"], function (data) {

    var Tick = function () {

        // The current game time in milliseconds.
        this.time = 0;

        // The number of milliseconds since the last tick
        this.delta = 0;
    };

    return data.define("tick", Tick);
});