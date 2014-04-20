// Handles drawing to canvas surfaces.
define(["data", "require"], function (data, require) {

    // Todo:  Move into a data type to enable registration outside of 'draw'
    var renderers = [];

    require(["../common/renderers/sprite-renderer"], function(renderer) {
        renderers.push({ type: "sprite", renderer: renderer });
    });

    require(["../common/renderers/rectangle-renderer"], function(renderer) {
        renderers.push({ type: "rectangle", renderer: renderer });
    });

    require(["../common/renderers/text-renderer"], function(renderer) {
        renderers.push({ type: "text", renderer: renderer });
    });

    var canvases = data("canvas");
    var cameras = data("camera");
    var frames = data("frame");

    /*var drawObject = function(camera, x, y, canvas, collection) {
        var toDraw = collection.get({ canvas: canvas.id });

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
    };*/

    frames.on("save", function () {

        canvases.each(function(canvas) {

            var context = canvas.getContext();

            context.clearRect(0, 0, canvas.width, canvas.height);

            var camera = cameras.first({ canvas: canvas.id });

            if (camera) {
                var x = parseInt(canvas.width / 2) - camera.x;
                var y = parseInt(canvas.height / 2) - camera.y;

                _.each(renderers, function(each) {
                    data(each.type).each(function(drawable) {
                        each.renderer.render(canvas, drawable, x, y);
                    });
                });
            }
        });
    });
});