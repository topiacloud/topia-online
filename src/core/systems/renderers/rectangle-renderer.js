// Handles rendering and interaction of rectangles on a canvas.
define(["../../common/data", "../../common/cache"], function (data, cache) {

    var cursor = data("cursor");
    var renders = data("render");
    var rectangles = data("rectangle");

    renders.on("save", function (render) {
        if (render.type == "rectangle") {
            var rectangle = rectangles.get(render.id);

            if (rectangle) {
                var canvas = cache.get("canvas" + render.canvas);
                var context = canvas.getContext();

                var x = render.x + rectangle.x;
                var y = render.y + rectangle.y;

                // Todo:  Some performance may be lost with setting fillStyle & strokeStyle like this

                if (rectangle.color) {
                    if(rectangle.color != context.fillStyle) {
                        context.fillStyle = rectangle.color;
                    }

                    context.fillRect(x, y, rectangle.width, rectangle.height);
                }

                if (rectangle.border) {
                    if(rectangle.border != context.strokeStyle) {
                        context.strokeStyle = rectangle.border;
                    }

                    context.strokeRect(x, y, rectangle.width, rectangle.height);
                }
            }
        }
    });

    /*cursor.on("save", function (position) {

        var x = position.x;
        var y = position.y;

        _.each(rectangles.get(), function (rectangle) {

            if (x >= rectangle.x && x <= (rectangle.x + rectangle.width)) {
                if (y >= rectangle.y && y <= (rectangle.y + rectangle.height)) {

                    if (!rectangle.hovered) {
                        rectangle.hovered = true;
                    }

                    return;
                }
            }

            if (rectangle.hovered) {
                rectangle.hovered = false;
            }
        });
    });*/
});