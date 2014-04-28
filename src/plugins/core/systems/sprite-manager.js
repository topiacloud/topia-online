// Loads images and renders sprites.
define(["data"], function (data) {

    // New sprite is created
    data.sprite.on(["add", "image"], function(sprite) {
        if (_.isString(sprite.image)) {
            var image = data.image.first({ url: sprite.image }) || data.image.add({ url: sprite.image });
            sprite.image = image.id;
            sprite.isLoaded = image.isLoaded;
        } else {
            sprite.isLoaded = data.image.get(sprite.image).isLoaded;
        }
    });

    // Update sprites when images are loaded
    data.image.on(["add", "isLoaded"], function(image) {
        if (image.isLoaded) {
            data.sprite.each({ image: image.id }, function(sprite) {
                sprite.width = image.width;
                sprite.height = image.height;
                sprite.isLoaded = true;
            });
        }
    });

    var updateTransformationMatrix = function(sprite, x, y, camera) {
        var offset = sprite.getOffset();

        x += offset[0] * camera.zoom;
        y += offset[1] * camera.zoom;

        sprite._translateX = Math.round(x);
        sprite._translateY = Math.round(y);

        sprite._width = Math.round(sprite.width * camera.zoom);
        sprite._height = Math.round(sprite.height * camera.zoom);

        if (sprite._scaled) {
            
            if (sprite._scaleX < 0) {
                sprite._translateX = -sprite._translateX;
            }

            if (sprite._scaleY < 0) {
                sprite._translateY = -sprite._translateY;
            }
        }

        // Todo:  culling
    };

    // Set scaling matrix when sprite is flipped
    data.sprite.on(["add", "flip"], function(sprite) {

        if (!sprite.flip) {

            sprite._scaled = false;
            sprite._scaleX = 1;
            sprite._scaleY = 1;

        } else {

            sprite._scaled = true;

            switch( sprite.flip ) {

                case "horizontal":
                    sprite._scaleX = -1;
                    sprite._scaleY = 1;
                    sprite._translateX = -sprite._translateX;
                    break;

                case "vertical":
                    sprite._scaleX = 1;
                    sprite._scaleY = -1;
                    sprite._translateY = -sprite._translateY;
                    break;

                case "both":
                    sprite._scaleX = -1;
                    sprite._scaleY = -1;
                    sprite._translateX = -sprite._translateX;
                    sprite._translateY = -sprite._translateY;
                    break;
            }
        }
    });

    // Update the transform matrix of the sprite
    data.sprite.on(["x", "y", "width", "height", "scene"], function(sprite) {

        var scene = data.scene.find(sprite.scene);

        if (scene) {
            var canvas = data.canvas.find(scene.canvas);
            var camera = data.camera.find(scene.camera);

            var x = (canvas.width / 2) - camera.x;
            var y = (canvas.height / 2) - camera.y;

            updateTransformationMatrix(sprite, x, y, camera);
        }
    });

    var sprites = data.sprite.index("scene");
    var scenes = data.scene.index("camera");

    // Update transformation matrixes when camera position changes
    data.camera.on(["x", "y", "zoom"], function(camera) {
        scenes.each(camera.id, function(scene) {

            var canvas = data.canvas.find(scene.canvas);

            if (canvas) {
                var x = canvas.width / 2 - camera.x;
                var y = canvas.height / 2 - camera.y;

                sprites.each(scene.id, function(sprite) {
                    updateTransformationMatrix(sprite, x, y, camera);
                });
            }
        });
    });
});