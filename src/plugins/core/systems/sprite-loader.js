// Loads images and renders sprites.
define(["data"], function (data) {

    var images = data("image");
    var sprites = data("sprite");

    // New sprite is created
    sprites.on("save", function(sprite) {
        if (_.isString(sprite.image)) {
            var image = images.first({ url: sprite.image }) || images.save({ url: sprite.image });
            sprite.image = image.id;
            sprite.isLoaded = image.isLoaded;
            sprite.save();
        } else {
            sprite.isLoaded = images.get(sprite.image).isLoaded;
        }
    });

    // Update sprites when images are loaded
    images.on("save", function(image) {
        if (image.isLoaded) {
            sprites.each({ image: image.id }, function(sprite) {
                sprite.width = image.width;
                sprite.height = image.height;
                sprite.isLoaded = true;
                sprite.save();
            });
        }
    });
});