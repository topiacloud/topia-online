// Loads images and renders sprites.
define(["../../common/data", "../../common/cache", "../../common/image"], function(data, cache, Image) {

    var images = data("image");
    var sprites = data("sprite");
    var renders = data("render");

    var renderSprite = function(render) {
        if (render.type == "sprite") {
            var sprite = sprites.get(render.id);
            var image = images.get(sprite.image);

            if (image && image.isLoaded) {
                var canvas = cache.get("canvas" + render.canvas);
                var context = canvas.getContext();

                var drawable = null;

                if (sprite.transform) {
                    drawable = cache.get("canvas" + sprite.transform).canvas;
                } else {
                    drawable = Image.get(image.url);
                }

                var x = render.x + sprite.x - parseInt(drawable.width / 2);
                var y = render.y + sprite.y - drawable.height;

                context.drawImage(drawable, x, y);
            }
        }
    };

    // New sprite is created
    sprites.on("save", function(sprite) {
        if (_.isString(sprite.image)) {
            var image = images.first({ url: sprite.image }) || images.save({ url: sprite.image });
            sprite.image = image.id;
            sprite.save();
        }
    });

    // New image is created
    images.on("save", function(image) {
        if (!image.isLoaded) {
            Image.load(image.url, function(file) {
                image.isLoaded = true;
                image.width = file.width;
                image.height = file.height;
                images.save(image);
            });
        }
    });

    // Render a sprite
    renders.on("save", function (render) {
        renderSprite(render);
    });
});