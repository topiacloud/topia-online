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

    require(["../common/renderers/circle-renderer"], function(renderer) {
        renderers.push({ type: "circle", renderer: renderer });
    });

    require(["../common/renderers/line-renderer"], function(renderer) {
        renderers.push({ type: "line", renderer: renderer });
    });

    require(["../common/renderers/text-renderer"], function(renderer) {
        renderers.push({ type: "text", renderer: renderer });
    });

    data.frame.on("time", function () {

        data.canvas.each(function(canvas) {

            var context = canvas.getContext();

            context.clearRect(0, 0, canvas.width, canvas.height);

            var camera = data.camera.first({ canvas: canvas.id });

            if (camera) {
                var x = parseInt(canvas.width / 2) - camera.x;
                var y = parseInt(canvas.height / 2) - camera.y;

                _.each(renderers, function(each) {

                    // Todo:  Handle sorting elsewhere
                    var toDraw = _.sortBy(data[each.type].get(), function(item){ return item.index || 0; });

                    _.each(toDraw, function(item) {
                        each.renderer.render(canvas, item, x, y);
                    });
                });
            }
        });
    });
});