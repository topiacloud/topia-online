define(function() {

    return {

        render: function(canvas, context, line, camera) {

            var x = Math.round(line.x * camera.zoom - camera.bounds[0]);
            var y = Math.round(line.y * camera.zoom - camera.bounds[1]);
            var x2 = Math.round(line.x2 * camera.zoom - camera.bounds[0]);
            var y2 = Math.round(line.y2 * camera.zoom - camera.bounds[1]);

            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x2, y2);

            if (line.color && context.strokeStyle != line.color) {
                context.strokeStyle = line.color;
            }

            context.lineWidth = line.lineWidth * camera.zoom;
            context.stroke();
        }
    };
});