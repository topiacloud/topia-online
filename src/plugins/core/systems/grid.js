// A 2d grid system
define(["data"], function (data) {

    var selectedRect = 0;
    var rectangles = data("rectangle");
    var grids = data("grid");

    // Event when you first add a grid
    grids.on("add", function(grid) {

        var group = data("group").save({name:"test"});
        grid.group = group.id;
        grid.save();

        for (var x = 0; x < grid.width; x++) {
            for (var y = 0; y < grid.height; y++) {
                var rect = data("rectangle").create();
                rect.x = grid.x + (x * grid.cellWidth);
                rect.y = grid.y + (y * grid.cellHeight);
                rect.width = grid.cellWidth;
                rect.height = grid.cellHeight;
                rect.group = group.id;
                //rect.color = grid.color;
                rect.border = grid.color;

                rect.save();
                data("reaction").save({ type: "rectangle", target: rect.id, action: "touch" });
            }
        }
    });

    // Event when you remove a grid
    grids.on("remove", function (grid) {

        var group = data("group").get(grid.group);
        var rects = data("rectangle").get({ group: group.id });

        data("rectangle").remove(rects);
        data("group").remove(group);
    });
    
    // Enable selection of rectangle
    data("touch").on("save", function(touch) {
        if (touch.type == "rectangle") {
            var rect = rectangles.first({ id: touch.target });

            if (rect && selectedRect != rect.id) {

                // Tint the actor's sprite
                rect.border = "white";
                selectedRect = rect.id;
            }
        }
    });

    // Remove the tinted rectangle when mouse leaves
    data("touch").on("remove", function(touch) {
        if (touch.type == "rectangle") {

            var rect = rectangles.first({ id: touch.target });

            if (rect) {
                var grid = data("grid").first({group: rect.group});

                if (grid) {
                    rect.border = grid.color;
                } else {
                    rect.border = rect.color;
                }

                if (selectedRect == rect.id) {
                    selectedRect = 0;
                }
            }
        }
    });
});