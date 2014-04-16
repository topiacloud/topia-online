// Handles touch events on canvases
define(["../../common/data"], function (data) {

    var touch = { type: "canvas" };

    var processTouchEvent = function (element, e, state, button) {

        var x = e.pageX - $(e.target).offset().left;
        var y = e.pageY - $(e.target).offset().top;
        var time = new Date().getTime();

        touch.type = "canvas";
        touch.x = x;
        touch.y = y;
        touch.target = element.target;
        touch.state = state;
        touch.time = time;

        touch = data("touch").save(touch);
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

            /*element.mouseenter(function () {
                //each.hovered = true;
            });

            element.mouseleave(function () {
                //each.hovered = false;
            });*/
        }
    });
});