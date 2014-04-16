// Tracks the mouse cursor movement.
define(["core/common/data"], function (data) {

    var cursor = data("cursor").save({ x: -1, y: -1, element: null });

    $(document).mousemove(function (e) {
        cursor.x = e.pageX;
        cursor.y = e.pageY;
        cursor.save();
    });
});