define(function() {

    return {

        render: function(canvas, context, circle, camera) {

            var x = Math.round(circle.x * camera.zoom - camera.bounds[0]);
            var y = Math.round(circle.y * camera.zoom - camera.bounds[1]);
            var radius = Math.round(circle.radius * camera.zoom);

            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI, false);

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