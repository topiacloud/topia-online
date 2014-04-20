define(["data"], function(data) {

    return {

        render: function(canvas, rectangle, x, y) {
            var context = canvas.getContext();

            x += rectangle.x;
            y += rectangle.y;

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
    };
});