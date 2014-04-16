// Handles drawing to canvas surfaces.
define(["../../common/data", "../../common/cache"], function (data, cache) {

    var rectangles = data("rectangle");
    var sprites = data("sprite");
    var renders = data("render");
    var canvases = data("canvas");
    var cameras = data("camera");
    var frames = data("frame");
    var texts = data("text");

    var drawObject = function(camera, x, y, canvas, collection) {
        var toDraw = collection.get({ camera: camera.id });

        toDraw = _.sortBy(toDraw, function (each) {
            return each.index || 0;
        });

        var render = renders.firstOrNew();

        _.each(toDraw, function (drawable) {
            render.id = drawable.id;
            render.type = collection.name;
            render.canvas = canvas.id;
            render.x = x;
            render.y = y;
            render.save();
        });
    };

    frames.on("save", function () {

        _.each(canvases.get(), function (eachCanvas) {
            var canvas = cache.get("canvas" + eachCanvas.id);

            if (canvas && !canvas.offscreen) {
                var context = canvas.getContext();

                if (context) {
                    context.clearRect(0, 0, canvas.width, canvas.height);

                    var camera = cameras.first({ entity: eachCanvas.entity });

                    if (camera) {
                        var x = parseInt(canvas.width / 2) - camera.x;
                        var y = parseInt(canvas.height / 2) - camera.y;

                        drawObject(camera, x, y, eachCanvas, sprites);
                        drawObject(camera, x, y, eachCanvas, rectangles);
                        drawObject(camera, x, y, eachCanvas, texts);
                    }
                }
            }
        });
    });
});