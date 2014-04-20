define(["data"], function(data) {

    var images = data("image");

    return {

        render: function(canvas, sprite, x, y) {

            var image = images.get(sprite.image);

            if (image && image.isLoaded) {

                var imageCanvas = image.getCanvas();
                var context = canvas.getContext();

                var width = sprite.width || imageCanvas.width;
                var height = sprite.height || imageCanvas.height;
                var offset = sprite.getOffset();

                x += offset[0];
                y += offset[1];

                if (sprite.isAtlas) {
                    context.drawImage(imageCanvas, sprite.frameX, sprite.frameY, width, height, x, y, width, height);
                } else {
                    context.drawImage(imageCanvas, x, y);
                }
            }
        }
    };
});