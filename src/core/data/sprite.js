// A sprite is a drawable image with a reference to an image
define(["../common/data"], function (data) {

    var Sprite = function() {

        // The total width of the sprite.
        this.width = 0;

        // The total height of the sprite.
        this.height = 0;

        // Id of a transformation canvas for dynamic rendering
        this.transform = 0;

        // Id of an image that this sprite is using.
        this.image = 0;

        // The x offset relative to world coordinates
        this.x = 0;

        // The y offset relative to world coordinates
        this.y = 0;

        // The group that this sprite belongs to
        this.group = 0;
    };

    return data.define("sprite", Sprite);
});