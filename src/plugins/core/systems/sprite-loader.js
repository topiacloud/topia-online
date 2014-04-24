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
});