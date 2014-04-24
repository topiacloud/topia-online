// Handles touch events on sprites
define(["data", "../common/cache", "../common/image", "../common/pixel"], function (data, cache, Image, pixel) {

    var touches = data("touch");
    var sprites = data("sprite");

    var testTouchSprite = function(touch, sprite, touched) {

        if (!sprite.width || !sprite.height) {
            return;
        }

        var offset = sprite.getOffset();
        var x = offset[0];
        var y = offset[1];

        if (touch.x >= x && touch.x <= x + sprite.width) {
            if (touch.y >= y && touch.y <= y + sprite.height) {

                var image = data.image.get(sprite.image);

                if (image && image.isLoaded) {
                    var color = pixel.getPixel(image.getCanvas(), touch.x - x, touch.y - y);

                    // Check for opacity
                    if (color[3] > 0.2) {
                        var spriteTouch = data.touch.firstOrAdd({ type: "sprite", target: sprite.id });

                        spriteTouch.type = "sprite";
                        spriteTouch.target = sprite.id;
                        spriteTouch.x = touch.x - x;
                        spriteTouch.y = touch.y - y;
                        spriteTouch.state = touch.state;
                        return;
                    }
                }
            }
        }

        var match = _.find(touched, function(each) {
            return each.target == sprite.id;
        });

        if (match) {
            data.touch.remove(match);
        }
    };

    // Re-evaluate touch when sprite changes
    sprites.on("save", function(sprite) {

        // Does this sprite react to touch?
        var reaction = data.reaction.first({ action: "touch", type: "sprite", target: sprite.id });

        if (reaction) {
            
            var touch = touches.first({ type: "camera" });

            if (touch) {

                // Check existing sprites touched
                var touched = touches.get({ type: "sprite" });

                testTouchSprite(touch, sprite, touched);
            }
        }
    });

    data.touch.on(["add", "x", "y", "state"], function(touch) {

        if (touch.type == "camera") {

            // Check existing sprites touched
            var touched = data.touch.get({ type: "sprite" });

            data.reaction.each({ action: "touch", type: "sprite" }, function(reaction) {

                var sprite = data.sprite.first(reaction.target);

                if (sprite) {
                    testTouchSprite(touch, sprite, touched);
                }
            });
        }
    });
});