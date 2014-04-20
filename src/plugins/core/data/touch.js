// Represents a mouse or touch input event on a canvas
define(["data"], function (data) {

    var Touch = function () {

        // The context that the touch relates to.
        // Options: "document", "canvas", "camera", "sprite"
        this.type = "";

        // The id of the data type that triggered the touch
        this.target = 0;

        // The x position relative to the type.
        // If the type is "document": x is the offset from the top-left of the document
        // If the type is "canvas": x is the offset from the center of the canvas
        // If the type is "camera": x is the offset from the camera position
        // If the type is "region": x is the offset from the top-left of the region
        // If the type is "sprite": x is the offset from the top-left of the sprite
        this.x = 0;

        // The y position relative to the type.
        // If the type is "document": x is the offset from the top-left of the document
        // If the type is "canvas": y is the offset from the center of the canvas
        // If the type is "camera": y is the offset from the camera position
        // If the type is "region": y is the offset from the top-left of the region
        // If the type is "sprite": y is the offset from the top-left of the sprite
        this.y = 0;

        // NOT YET IMPLEMENTED
        // An identifier of the input button that was clicked, if applicable
        // options: "", "left", "right"
        this.button = "";

        // The status of the input event.
        // options: "move", "click", "down", "up"
        this.state = "";
    };

    return data.define("touch", Touch);
});