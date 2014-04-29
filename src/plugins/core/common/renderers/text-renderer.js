define(function() {

    return {

        render: function(canvas, context, text, camera) {

            var x = Math.round(text.x * camera.zoom - camera.bounds[0]);
            var y = Math.round(text.y * camera.zoom - camera.bounds[1]);

            var size = 20 * camera.zoom;

            context.fillStyle = text.color || "black";
            context.font = text.font || size + "px arial";
            context.fillText(text.text, x, y);

            /*if (text.border) {
                context.strokeStyle = text.border;
                context.strokeText(text.text, text.x, text.y);
            }*/
        }
    };
});