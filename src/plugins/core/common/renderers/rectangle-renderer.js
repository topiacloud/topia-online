define(function() {

    return {

        render: function(canvas, context, rectangle, camera) {

            var x = Math.round(rectangle.x * camera.zoom - camera.bounds[0]);
            var y = Math.round(rectangle.y * camera.zoom - camera.bounds[1]);
            var width = Math.round(rectangle.width * camera.zoom);
            var height = Math.round(rectangle.height * camera.zoom);

            // Todo:  Some performance may be lost with setting fillStyle & strokeStyle like this
            if (rectangle.color) {
                if(rectangle.color != context.fillStyle) {
                    context.fillStyle = rectangle.color;
                }

                context.fillRect(x, y, width, height);
            }

            if (rectangle.border) {
                if(rectangle.border != context.strokeStyle) {
                    context.strokeStyle = rectangle.border;
                }

                context.strokeRect(x, y, width, height);
            }
        }
    };
});