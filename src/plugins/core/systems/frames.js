// Updates the application 'frame' up to 60 times per second.
define(["data", "../common/timer"], function (data, Timer) {

    var frame = data.frame.add({ time: 0, fps: 0 });
    var tick = data.tick.add({ time: 0, delta: 0 });
    var lastTick = 0;

    var timer = new Timer({
        callback: function (update) {

            if (update.time > lastTick + 50) {
                tick.delta = update.time - lastTick;
                tick.time = lastTick = update.time;
                tick.fps = frame.fps;
                data.tick.commit();
            }

            frame.time = update.time;
            frame.fps = update.FPS;
            frame.delta = update.delta;
            data.frame.commit();
        }
    });

    timer.start();
});