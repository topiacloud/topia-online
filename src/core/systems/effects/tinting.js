// Loads and initializes tint effect
define(["../../common/data", "../../common/cache", "../../common/image"], function (data, cache, Image) {

    var canvases = data("canvas");
    var tints = data("tint");
    var sprites = data("sprite");
    var images = data("image");

    tints.on("save", function (tint) {

        if (tint.sprite) {
            var sprite = sprites.get(tint.sprite);
            var image = images.get(sprite.image);

            if (!tint.canvas) {
                tint.canvas = canvases.save({ offscreen: true, width: 1, height: 1 }).id;
                tint.save();
                return;
            }

            Image.load(image.url, function (spriteImage) {
                var canvas = canvases.get(tint.canvas);
                canvas.width = image.width;
                canvas.height = image.height;
                canvas.save();

                // Draw to the canvas
                var canvasElement = cache.get("canvas" + canvas.id);
                var context = canvasElement.getContext();

                canvasElement.fill(tint.color);
                context.globalCompositeOperation = "destination-atop";
                context.drawImage(spriteImage, 0, 0);

                sprite.transform = canvas.id;
                sprite.save();
            });
        }
    });
});