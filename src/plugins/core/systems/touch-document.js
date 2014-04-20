// Captures mouse/touch events from the document and dispatches them as 'touch' data
define(["data"], function (data) {

    var touches = data("touch");
    var touch = null;

    $(document).mousemove(function (e) {
        if (touch == null) {
            touch = touches.create();
            touch.type = "document";
        }

        touch.x = e.pageX;
        touch.y = e.pageY;

        touches.save(touch);
    });

    $(document).mouseleave(function(e) {
        if (touch) {
            touches.remove(touch);
            touch = null;
        }
    });
});