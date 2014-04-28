define(function() {

    return {

        render: function(canvas, context, fill) {

            context.save();

            if (context.fillStyle != fill.color) {
                context.fillStyle = fill.color;
            }

            if (fill.composite) {
                context.globalCompositeOperation = fill.composite;
            }

            context.fillRect(0, 0, canvas.width, canvas.height);

            context.restore();
        }
    };
});