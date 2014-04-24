// Captures mouse/touch events from the document and dispatches them as 'touch' data
define(["data"], function (data) {

    var touch = null;

    // Temporarily disabled due to performance reasons
    return;

    $(document).mousemove(function (e) {

        if (touch == null) {
            touch = data.touch.create();
            touch.type = "document";
        }

        touch.x = e.pageX;
        touch.y = e.pageY;

        data.touch.add(touch);
    });

    $(document).mouseleave(function(e) {
        if (touch) {
            data.touch.remove(touch);
            touch = null;
        }
    });
});