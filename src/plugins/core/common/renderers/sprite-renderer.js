define(["data"], function(data) {

    return {

        render: function(canvas, context, sprite, camera) {

            if (!sprite._visible) {
                return;
            }

            var image = data.image.find(sprite.image);

            if (image.isLoaded) {

                var imageCanvas = image.getCanvas();

                //var width = sprite.width || imageCanvas.width;
                //var height = sprite.height || imageCanvas.height;

                //context.setTransform(sprite._scaleX, sprite._skewX, sprite._skewY, sprite._scaleY, 0, 0);

                // Draw relative to offset (camera)
                var x = (sprite._x - camera.bounds[0]) * sprite._scaleX;
                var y = (sprite._y - camera.bounds[1]) * sprite._scaleY;

                if (sprite._scaled) {
                    context.save();
                    context.scale(sprite._scaleX, sprite._scaleY);
                    //context.transform(sprite._scaleX, sprite._skewX, sprite._skewY, sprite._scaleY, 0, 0);
                }

                if (sprite.isAtlas) {
                    //context.drawImage(imageCanvas, sprite.frameX, sprite.frameY, width, height, sprite._x, sprite._y, width * scale, height * scale);
                } else {
                    context.drawImage(imageCanvas, 0, 0, sprite.width, sprite.height, x, y, sprite._width, sprite._height);
                }

                if (sprite._scaled) {
                    context.restore();
                }
            }
        }
    };
});