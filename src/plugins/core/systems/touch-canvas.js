// Handles touch events on canvases
define(["data"], function (data) {

    var touches = data("touch");

    var processTouchEvent = function (element, e, state, button) {

        var x = e.pageX - $(e.target).offset().left - ($(e.target).width() / 2);
        var y = e.pageY - $(e.target).offset().top - ($(e.target).height() / 2);

        var time = new Date().getTime();
        var touch = touches.firstOrNew({ type: "canvas", target: element.target });

        touch.type = "canvas";
        touch.target = element.target;
        touch.x = x;
        touch.y = y;
        touch.state = state;
        touch.time = time;

        touches.save(touch);
    };

    data("element").on("save", function(each) {
        if (each.tag == "canvas") {
            var element = $(each.selector);

            element.mousemove(function (e) {
                processTouchEvent(each, e, "move");
            });

            element.click(function (e) {
                processTouchEvent(each, e, "click");
            });

            element.mousedown(function (e) {
                processTouchEvent(each, e, "down");
            });

            element.mouseup(function (e) {
                processTouchEvent(each, e, "up");
            });

            element.mouseleave(function (e) {
                var touch = touches.first({ type: "canvas", target: each.target });

                if (touch) {
                    touches.remove(touch);
                }
            });
        }
    });
});