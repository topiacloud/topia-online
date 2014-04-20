// Represents a preset animation 'strip' that can be associated with sprites
define(["data"], function (data) {

    var Animation = function () {

        // (Required) The path to the application animation file(s)
        // Option1: A directory which contains all of the animation frame images
        // Option2: A .json file which contains animation data
        this.path = "";

        // (Required) The total milliseconds that the animation should play
        this.duration = 1000;

        // (Required) Id of the sprite that this animation applies to
        this.sprite = 0;

        // (Optional) Whether the animation should repeat when finished
        this.repeat = false;

        // (Internal) The total number of animation frames
        this.frames = 0;

        // (Internal) The current frame of animation being played
        this.frame = 0;

        // (Internal) The amount of time the animation has played
        this.time = 0;

        // (Internal) The width of the animation (all frames must be the same width)
        this.width = 0;

        // (Internal) The height of the animation (all frames must be the same height)
        this.height = 0;
    };

    return data.define("animation", Animation);
});