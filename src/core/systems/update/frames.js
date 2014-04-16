// Updates the application 'frame' up to 60 times per second.
define(["../../common/data", "../../common/timer"], function (data, Timer) {

    var frame = data("frame").save({ time: 0, fps: 0 });

    var timer = new Timer({
        callback: function (update) {
            frame.time = update.time;
            frame.fps = update.FPS;
            frame.delta = update.delta;
            frame.save();
        }
    });

    timer.start();
});