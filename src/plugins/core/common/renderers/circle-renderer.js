define(function() {

    return {

        render: function(canvas, circle, x, y) {
            var context = canvas.getContext();

            x += circle.x;
            y += circle.y;

            context.beginPath();
            context.arc(x, y, circle.radius, 0, 2 * Math.PI, false);

            // Todo:  Some performance may be lost with setting fillStyle & strokeStyle like this
            if (circle.color) {
                if (circle.color != context.fillStyle) {
                    context.fillStyle = circle.color;
                }

                context.fill();
            }

            if (circle.border) {
                if (circle.border != context.strokeStyle) {
                    context.strokeStyle = circle.border;
                }

                context.lineWidth = circle.borderWidth;
            }

            context.stroke();
        }
    };
});