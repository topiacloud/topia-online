// Manages drawable entities and rendering
define(["data", "require"], function (data, require) {

    // Todo:  Cache sorted visuals

    var renderers = {};

    require(["../common/renderers/sprite-renderer"], function(renderer) {
        renderers.sprite = renderer;
    });

    require(["../common/renderers/rectangle-renderer"], function(renderer) {
        renderers.rectangle = renderer;
    });

    require(["../common/renderers/circle-renderer"], function(renderer) {
        renderers.circle = renderer;
    });

    require(["../common/renderers/line-renderer"], function(renderer) {
        renderers.line = renderer;
    });

    require(["../common/renderers/text-renderer"], function(renderer) {
        renderers.text = renderer;
    });

    require(["../common/renderers/fill-renderer"], function(renderer) {
        renderers.fill = renderer;
    });

    var visuals = data.visual.index("scene");

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