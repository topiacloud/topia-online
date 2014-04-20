define(function() {

    var Timer = function (options) {

        options = options || {};

        this.context = options.context || this;
        this.callback = options.callback;

        this.active = false;
        this.startTime = Date.now();

        this.ms = this.startTime;
        this.last = this.startTime;

        this.FPS = 0;
        this.frameStart = 0;
        this.frames = 0;

        this.time = 0;
        this.delta = 0;
    };

    Timer.prototype = {

        start: function () {
            this.active = true;

            var self = this;

            (function loop() {
                if (self.active) {
                    self.requestAnimationFrame(loop);
                    self.tick();
                }
            })();
        },

        stop: function () {
            this.active = false;
        },

        tick: function () {

            if (!this.active) {
                return;
            }

            this.ms = Date.now();

            this.delta = this.ms - this.last;
            this.last = this.ms;
            this.time += this.delta;

            if (this.time - this.frameStart > 1000) {
                this.FPS = this.frames;
                this.frameStart = this.time;
                this.frames = 0;
            } else {
                this.frames += 1;
            }

            if (this.FPS > 60) {
                this.FPS = 60;
            }

            this.callback.call(this.context, this);
        },

        requestAnimationFrame: function (delegate) {
            var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
                function (callback) {
                    setTimeout(callback, 1000 / 60);
                    return 1;
                };

            requestAnimationFrame(delegate);
        }
    };

    return Timer;
});