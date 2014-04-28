// A visual element that is currently within the viewport of the canvas
define(["data"], function (data) {

    var Visual = function () {

        // (Required) The data type of the underlying drawable, in order to look up the appropriate renderer
        this.type = "";

        // (Required) The id of the underlying drawable data type
        this.target = 0;

        // (Required) The scene that this visual belongs to
        this.scene = 0;

        // (Optional) The draw order of this visual element (lower = first)
        this.index = 0;
    };

    return data.define("visual", Visual);
});