// Handles touch events on sprites
define(["../../common/data", "../../common/cache", "../../common/image", "../../common/pixel"], function (data, cache, Image, pixel) {

    data("touch").on("save", function(touch) {

        if (touch.type == "region") {

            var region = data("region").get(touch.target);

            if (region.group) {
                var sprite = data("sprite").first({ group: region.group });

                if (sprite) {
                    var image = data("image").get(sprite.image);

                    if (image && image.isLoaded) {
                        var file = Image.get(image.url);

                        var x = touch.x - sprite.x;
                        var y = touch.y - sprite.y;

                        var color = pixel.getPixel(file, x, y);

                        if (color[3] == 0) {
                            return;
                        }

                        if (touch.state == "click") {
                            console.log("click: " + x + " " + y);
                        }

                        touch.type = "sprite";
                        touch.target = sprite.id;
                        touch.x = x;
                        touch.y = y;
                        touch.save();
                    }
                }
            }
        }
    });
});