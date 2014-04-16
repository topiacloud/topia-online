// A frame represents the flow of game time, and is updated up to 60 times per second.
define(["../common/data"], function (data) {

    var Frame = function () {

        // The current game time in milliseconds.
        this.time = 0;

        // The number of frames invoked in the last second.
        this.fps = 0;

        // The number of milliseconds since the last frame
        this.delta = 0;
    };

    return data.define("frame", Frame);
});