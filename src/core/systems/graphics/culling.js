// Defines a viewport for scene rendering to a canvas
define(["../../common/data"], function (data) {

    // Todo:  This all needs to change, drawables should not be associated with a 'camera' directly
    var initialize = function(item) {
        if (!item.camera) {
            var camera = data("camera").first();

            if (camera) {
                item.camera = camera.id;
            }
        }
    };

    data("rectangle").on("save", function(rectangle) {
        initialize(rectangle);
    });

    data("sprite").on("save", function (sprite) {
        initialize(sprite);
    });

    data("text").on("save", function (text) {
        initialize(text);
    });
});