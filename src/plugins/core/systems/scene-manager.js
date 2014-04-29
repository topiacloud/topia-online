// Manages drawable entities and rendering
define(["data", "require"], function (data, require) {

    // Todo:  Cache sorted visuals

    var renderers = {};
    var visuals = data.visual.index("scene");

    require([
        "../common/renderers/sprite-renderer",
        "../common/renderers/rectangle-renderer",
        "../common/renderers/circle-renderer",
        "../common/renderers/line-renderer",
        "../common/renderers/text-renderer",
        "../common/renderers/fill-renderer"
    ],
    function(sprites, rectangles, circles, lines, texts, fills) {

        renderers.sprite = sprites;
        renderers.rectangle = rectangles;
        renderers.circle = circles;
        renderers.line = lines;
        renderers.text = texts;
        renderers.fill = fills;

        // Render scenes each frame
        data.frame.on("time", function () {
            data.scene.each(function(scene) {
                var camera = data.camera.find(scene.camera);
                var canvas = data.canvas.find(scene.canvas);

                var context = canvas.getContext();
                context.clearRect(0, 0, canvas.width, canvas.height);

                /*if (scene.sortBy) {
                    visuals = _.sortBy(visuals, function(each) { return each[scene.sortBy] || 0; });
                } else {
                    visuals = _.sortBy(visuals, function(each) { return each.index || 0; });
                }*/

                visuals.each(scene.id, function(visual) {
                    renderers[visual.type].render(canvas, context, data.get(visual.target), camera);
                });
            });
        });
    });

    var defaultSceneId = 0;

    data.scene.on("add", function (scene) {
        if (scene.isDefault) {
            defaultSceneId = scene.id;
        }
    });

    var associateVisual = function(drawable, type) {
        if (!drawable.scene) {
            drawable.scene = defaultSceneId;
        }

        data.visual.add({ scene: drawable.scene, target: drawable.id, type: type });
    };

    var mapVisuals = function(types) {
        _.each(types, function(type) {
            data[type].on("add", function(visual) {
                associateVisual(visual, type);
            });
        });
    };

    // Associate visuals with scenes
    mapVisuals(["rectangle", "circle", "line", "sprite", "text", "fill"]);
});