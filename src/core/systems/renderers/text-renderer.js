// Handles drawing text to a canvas
define(["../../common/data", "../../common/cache"], function (data, cache) {
 
    data("render").on("save", function(render) {
        if (render.type == "text") {
            var text = data("text").get(render.id);

            if (text) {
                var canvas = cache.get("canvas" + render.canvas);
                var context = canvas.getContext();

                context.fillStyle = text.color || "black";
                context.font = text.font || "20px arial";
                context.fillText(text.text, text.x, text.y);

                /*if (text.border) {
                    context.strokeStyle = text.border;
                    context.strokeText(text.text, text.x, text.y);
                }*/
            }
        }
    });
});