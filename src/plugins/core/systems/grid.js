// A 2d grid system
define(["data"], function (data) {

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
                rect.color = grid.color;
                rect.border = grid.color;
                rect.save();
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
});