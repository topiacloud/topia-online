// A region defined to capture user input
define(["../common/data"], function (data) {

    var Region = function () {

        // Left offset position of the region, relative to it's context.
        this.x = 0;

        // Top offset position of the region, relative to it's context.
        this.y = 0;

        // Pixel width of the region.
        this.width = 0;

        // Pixel height of the region.
        this.height = 0;

        // Input state of the region
        // Options:  "hovered" or "clicked"
        this.state = "";

        // The group that this region belongs to
        this.group = 0;
    };

    return data.define("region", Region);
});