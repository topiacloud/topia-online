// A 2d grid system
define(["data"], function (data) {

    // Event when you first add a grid
    data.grid.on("add", function (grid) {

        // there is no selected rectangle id
        grid.selected = null;

        // set the previous points to whatever the grid system currently is, so that delta checks will ping 0,0
        grid.prevX = grid.x;
        grid.prevY = grid.y;
        grid.prevColor = grid.color;

        // add a group for this grid system
        var group = data.group.add({name:"test"});
        grid.group = group.id;

        data.reaction.add({ type: "grid", target: grid.id, action: "touch" });

        // create all the rectangles required for the grid system
        for (var x = 0; x < grid.width; x++) {
            for (var y = 0; y < grid.height; y++) {
                var rect = data.rectangle.add( {
                    x: grid.x + (x * grid.cellWidth),
                    y: grid.y + (y * grid.cellHeight),
                    width: grid.cellWidth,
                    height: grid.cellHeight,
                    group: group.id,
                    border: grid.color
                });
            }
        }
    });

    // Event when the grid system's color changes
    data.grid.on("color", function (grid) {
        // get an array of the rectangles in the grid system's group
        var rects = data.rectangle.get({group: grid.group});

        // and adjust them accordingly
        _.each(rects, function (rect) {
            rect.border = grid.color;
        });

        grid.prevColor = grid.color;
    });

    // Event when the grid system's position has been changed
    data.grid.on(["x", "y"], function (grid) {

        // check to see if there has been any change in position to the grid system
        var dx = grid.x - grid.prevX;
        var dy = grid.y - grid.prevY;

        // update the previous position values to what grid.x/grid.y is now
        grid.prevX = grid.x;
        grid.prevY = grid.y;

        // so if there was any change in position..
        if (dx != 0 || dy != 0) {

            // get an array of the rectangles in the grid system's group
            var rects = data.rectangle.get({group: grid.group});

            // and adjust them accordingly
            _.each(rects, function (rect) {
                rect.x += dx; rect.y += dy;
            });

        }
        
    });

    // Event when you remove a grid
    data.grid.on("remove", function (grid) {

        var group = data.group.get(grid.group);
        var rects = data.rectangle.get({group: grid.group});
        data.rectangle.remove(rects);
        data.group.remove(group);

    });

    data.touch.on("add", function (touch) {

        if (touch.type == "grid") {
            var grid = grid.first(touch.target);

            var dx = touch.x - grid.x;
            var dy = touch.y - grid.y;

            grid.color = "white";
        }

    });

    data.touch.on("remove", function (touch) {
        if (touch.type == "grid") {
            var grid = grid.first(touch.target);

            var dx = touch.x - grid.x;
            var dy = touch.y - grid.y;

            grid.color = grid.prevColor;
        }
    });

});