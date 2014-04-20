define(["data"], function(data) {

    return {

        render: function(canvas, text, x, y) {
            var context = canvas.getContext();

            context.fillStyle = text.color || "black";
            context.font = text.font || "20px arial";
            context.fillText(text.text, text.x, text.y);

            /*if (text.border) {
                context.strokeStyle = text.border;
                context.strokeText(text.text, text.x, text.y);
            }*/
        }
    };
});