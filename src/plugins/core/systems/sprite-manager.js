// Loads images and renders sprites.
define(["data"], function (data) {

    data.sprite.on("add", function(sprite) {
        sprite.bounds = [0, 0, 0, 0];
    });

    // New sprite is created
    data.sprite.on(["add", "image"], function(sprite) {

        var image;

        if (_.isString(sprite.image)) {
            image = data.image.first({ url: sprite.image }) || data.image.add({ url: sprite.image });
            sprite.image = image.id;
        } else {
            image = data.image.get(sprite.image);
        }

        sprite.isLoaded = image.isLoaded;
        sprite.width = image.width;
        sprite.height = image.height;
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
                    break;

                case "vertical":
                    sprite._scaleX = 1;
                    sprite._scaleY = -1;
                    break;

                case "both":
                    sprite._scaleX = -1;
                    sprite._scaleY = -1;
                    break;
            }
        }
    });
});