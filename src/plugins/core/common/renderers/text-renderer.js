define(function() {

    return {

        render: function(canvas, context, text, x, y) {

            context.fillStyle = text.color || "black";
            context.font = text.font || "20px arial";
            context.fillText(text.text, text.x + x, text.y + y);

            /*if (text.border) {
                context.strokeStyle = text.border;
                context.strokeText(text.text, text.x, text.y);
            }*/
        }
    };
});