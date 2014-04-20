// Represents a single image within an animation
define(["data"], function (data) {

    var AnimationFrame = function () {

        // The path to the folder of the animation frame file
        this.path = "";

        // The filename of the animation frame
        this.name = "";

        // Defines the 'order' of this frame with other animation frames
        this.index = 0;

        // (Internal) Image id of the associated image, if applicable
        this.image = 0;

        // (Internal) These fields get set if the animation frame maps to a sprite sheet
        this.atlas = false;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.trimmed = false;
        this.sourceX = 0;
        this.sourceY = 0;
        this.sourceWidth = 0;
        this.sourceHeight = 0;
    };

    AnimationFrame.prototype = {

        getFullPath: function() {
            return this.path + this.name;
        }
    };

    return data.define("animation-frame", AnimationFrame);
});