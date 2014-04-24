define(function() {

    return {

        render: function(canvas, line, x, y) {
            var context = canvas.getContext();

            context.beginPath();
            context.moveTo(x + line.x, y + line.y);
            context.lineTo(x + line.x2, y + line.y2);

            if (line.color && context.strokeStyle != line.color) {
                context.strokeStyle = line.color;
            }

            context.lineWidth = line.lineWidth;
            context.stroke();
        }
    };
});