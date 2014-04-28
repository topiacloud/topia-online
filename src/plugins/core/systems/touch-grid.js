// Handles touch events on rectangles
define(["data"], function (data) {

    var testTouchGrid = function(touch, grid, touched) {

        //if (!grid.width || !grid.height) { return; }

        var x = grid.x;
        var y = grid.y;

        if (touch.x >= x && touch.x <= x + (grid.width * grid.cellWidth)) {
            if (touch.y >= y && touch.y <= y + (grid.height * grid.cellHeight)) {

                var gridTouch = data.touch.firstOrNew({ type: "grid", target: grid.id });

                gridTouch.type = "grid";
                gridTouch.target = grid.id;
                gridTouch.x = touch.x - x;
                gridTouch.y = touch.y - y;
                gridTouch.state = touch.state;

                return;
            }
        }

        var match = _.find(touched, function(each) {
            return each.target == grid.id;
        });

        if (match) {
            touches.remove(match);
        }
    };

    // Re-evaluate touch when grid changes
    data.grid.on("add", function(grid) {

        // Does this grids react to touch?
        var reaction = data.reaction.first({ action: "touch", type: "grid", target: grid.id });

        if (reaction) {
            
            var touch = data.touch.first({ type: "camera" });

            if (touch) {

                // Check existing rectangles touched
                var touched = data.touch.get({ type: "grid" });

                testTouchGrid(touch, grid, touched);
            }
        }
    });

    data.touch.on("add", function(touch) {

        if (touch.type == "camera") {

            // Check existing grids touched
            var touched = data.touch.get({ type: "grid" });

            data.reaction.each({ action: "touch", type: "grid" }, function(reaction) {

                var grid = data.grid.first(reaction.target);

                if (grid) {
                    testTouchGrid(touch, grid, touched);
                }
            });
        }
    });
});