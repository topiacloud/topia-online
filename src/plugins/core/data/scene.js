// A scene represents a list of drawables with an associated canvas & camera
define(["data"], function (data) {

    var Scene = function () {

        // (Required) The id of the camera meant to visualize the 'viewport' of the scene
        this.camera = 0;

        // (Required) The id of the canvas that this scene should render to
        this.canvas = 0;

        // (Optional) The field name to use when sorting visual elements associated with this scene
        this.sortBy = "";

        // (Optional) All drawables objects will get added to this scene by default unless otherwise specified
        this.isDefault = false;
    };

    return data.define("scene", Scene);
});