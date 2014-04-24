// Prevents a specified function from being called too frequently
define(function () {

    var Throttle = function(ms) {
        this.ms = ms || 20;
        this.last = new Date();
        this.callback = null;
        this.timeout = null;
    };

    Throttle.prototype = {

        action: function(callback) {
            
            if (this.timeout) {
                this.callback = callback;
                return;
            }

            var time = new Date() - this.last;

            if (time < this.ms) {
                var self = this;

                this.callback = callback;

                this.timeout = setTimeout(function() {
                    self.invoke();
                }, this.ms - time);
            } else {
                callback();
                this.last = new Date();
            }
        },

        invoke: function() {
            this.callback();
            this.last = new Date();

            this.callback = null;
            this.timeout = null;
        }
    };

    return Throttle;
});