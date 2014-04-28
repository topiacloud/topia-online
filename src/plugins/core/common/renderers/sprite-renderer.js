define(["data"], function(data) {

    return {

        render: function(canvas, context, sprite) {

            var image = data.image.find(sprite.image);

            if (image.isLoaded) {

                var imageCanvas = image.getCanvas();

                //var width = sprite.width || imageCanvas.width;
                //var height = sprite.height || imageCanvas.height;

                //context.setTransform(sprite._scaleX, sprite._skewX, sprite._skewY, sprite._scaleY, 0, 0);

                if (sprite._scaled) {
                    context.save();
                    context.transform(sprite._scaleX, sprite._skewX, sprite._skewY, sprite._scaleY, 0, 0);
                }

                if (sprite.isAtlas) {
                    //context.drawImage(imageCanvas, sprite.frameX, sprite.frameY, width, height, sprite._translateX, sprite._translateY, width * scale, height * scale);
                } else {
                    context.drawImage(imageCanvas, 0, 0, sprite.width, sprite.height, sprite._translateX, sprite._translateY, sprite._width, sprite._height);
                }

                if (sprite._scaled) {
                    context.restore();
                }
            }
        }
    };
});