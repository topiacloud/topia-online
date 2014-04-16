// Observes input events for a given element
define(function() {

    var InputObserver = function (options) {
        options = options || {};

        this.element = options.element;
        this.inside = false;
        this.position = { x: 0, y: 0 };
    };

    InputObserver.prototype = {

        move: function (callback) {
            var self = this;

            $(this.element).mousemove(function (e) {
                self.inside = true;

                var offset = $(this).parent().offset();
                var x = e.pageX - offset.left;
                var y = e.pageY - offset.top;

                if (x != self.position.x || y != self.position.y) {
                    self.position.x = x;
                    self.position.y = y;

                    callback(self.position);
                }
            });
        },

        over: function (callback) {
            var self = this;

            $(this.element).mouseenter(function () {
                self.inside = true;
                callback();
            });
        },

        out: function (callback) {
            var self = this;

            $(this.element).mouseleave(function () {
                self.inside = false;
                callback();
            });
        }
    };

    return {
        observe: function(options) {
            return new InputObserver(options);
        }
    };

});