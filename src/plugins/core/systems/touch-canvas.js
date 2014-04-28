// Handles touch events on canvases
define(["data", "../common/throttle", "lib/mousewheel/jquery.mousewheel.min.js"], function (data, Throttle, mousewheel) {

    var throttle = new Throttle(50);

    var processTouchEvent = function (canvasId, e, state, button) {

        var touch = data.touch.first({ target: canvasId });

        if (!touch) {
            return;
        }

        var x = e.pageX - $(e.target).offset().left - ($(e.target).width() / 2);
        var y = e.pageY - $(e.target).offset().top - ($(e.target).height() / 2);

        var time = new Date().getTime();

        touch.x = x;
        touch.y = y;
        touch.state = state;
        touch.time = time;
        touch.button = button;

        data.touch.commit();
    };

    data.touchable.on("add", function(reaction) {
        if (reaction.type == "canvas") {
            var canvas = data.get(reaction.target);
            var element = canvas.getCanvas();

            $(element).addClass("touchable");

            $(element).mousemove(function (e) {
                throttle.action(function() {
                    processTouchEvent(canvas.id, e, "move");
                });
            });

            $(element).click(function (e) {
                processTouchEvent(canvas.id, e, "click");
            });

            $(element).mousedown(function (e) {
                processTouchEvent(canvas.id, e, "down");
            });

            $(element).mouseup(function (e) {
                processTouchEvent(canvas.id, e, "up");
            });

            $(element).mouseleave(function () {
                var touch = data.touch.first({ target: canvas.id });
                data.touch.remove(touch);
            });

            $(element).mouseenter(function (e) {
                data.touch.add({ type: "canvas", target: canvas.id, state: "over" });
            });

            $(element).mousewheel(function(e) {
                if (e.deltaY != 0) {
                    processTouchEvent(canvas.id, e, "wheel", e.deltaY);
                }
            });
        }
    });
});