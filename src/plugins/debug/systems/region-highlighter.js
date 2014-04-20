// Draws rectangles on each region
define(["data"], function (data) {

    data("region").on("save", function(region) {

        if (!region.group) {
            region.group = data("group").save({ name: "region" + region.id }).id;
            region.save();
            return;
        }

        var group = data("group").first(region.group);

        data("rectangle").save({ x: region.x, y: region.y, width: region.width, height: region.height, group: group.id, border: "yellow" });
    });
});