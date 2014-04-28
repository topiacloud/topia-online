// Handles touch events on rectangles
define(["data"], function (data, cache) {
    
    var touches = data("touch");
    var rectangles = data("rectangle");

    var testTouchRectangle = function(touch, rectangle, touched) {

        if (!rectangle.width || !rectangle.height) {
            return;
        }

        var x = rectangle.x;
        var y = rectangle.y;

        if (touch.x >= x && touch.x <= x + rectangle.width) {
            if (touch.y >= y && touch.y <= y + rectangle.height) {

                var rectTouch = touches.firstOrNew({ type: "rectangle", target: rectangle.id });

                rectTouch.type = "rectangle";
                rectTouch.target = rectangle.id;
                rectTouch.x = touch.x - x;
                rectTouch.y = touch.y - y;
                rectTouch.state = touch.state;
                touches.save(rectTouch);
                return;
            }
        }

        var match = _.find(touched, function(each) {
            return each.target == rectangle.id;
        });

        if (match) {
            touches.remove(match);
        }
    };

    // Re-evaluate touch when rectangle changes
    rectangles.on("save", function(rectangle) {

        // Does this rectangle react to touch?
        var touchable = data.touchable.first({ type: "rectangle", target: rectangle.id });

        if (touchable) {
            
            var touch = touches.first({ type: "camera" });

            if (touch) {

                // Check existing rectangles touched
                var touched = touches.get({ type: "rectangle" });

                testTouchRectangle(touch, rectangle, touched);
            }
        }
    });

    touches.on("save", function(touch) {

        if (touch.type == "camera") {

            // Check existing rectangles touched
            var touched = touches.get({ type: "rectangle" });

            data.touchable.each({ type: "rectangle" }, function(touchable) {

                var rectangle = data("rectangle").first(touchable.target);

                if (rectangle) {
                    testTouchRectangle(touch, rectangle, touched);
                }
            });
        }
    });
});