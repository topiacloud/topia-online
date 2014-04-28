// A sprite is a drawable image with a reference to an image
define(["data"], function (data) {

    var Sprite = function() {

        // (Required) The x offset relative to world coordinates
        this.x = 0;

        // (Required) The y offset relative to world coordinates
        this.y = 0;

        // (Required) The id of the canvas that this sprite should be rendered to
        this.canvas = 0;

        // (Required) Url of image, or id of an image data reference
        this.image = "";

        // (Optional) Direction of the image to be flipped
        // Values: "horizontal", "vertical", "both"
        this.flip = "";

        // (Internal) The total width of the sprite (from the graphic).
        this.width = 0;

        // (Internal) The total height of the sprite (from the graphic).
        this.height = 0;

        // The group that this sprite belongs to
        this.group = 0;

        // The x offset of the 'center point' of the sprite, expressed as a float from 0 (left) to 1 (right)
        this.anchorX = 0.5;

        // The y offset of the 'center point' of the sprite, expressed as a float from 0 (top) to 1 (middle)
        this.anchorY = 1;

        // (Internal) Cached transform matrix fields
        this._scaled = false;
        this._scaleX = 1;
        this._scaleY = 1;
        this._skewX = 0;
        this._skewY = 0;
        this._translateX = 0;
        this._translateY = 0;
        this._width = 0;
        this._height = 0;
    };

    Sprite.prototype = {

        getOffset: function() {
            var x = this.x;
            var y = this.y;

            if (this.sourceX) {
                x += this.sourceX - (this.sourceSizeWidth * this.anchorX);
                y += this.sourceY - (this.sourceSizeHeight * this.anchorY);
            } else {
                x -= (this.width * this.anchorX);
                y -= (this.height * this.anchorY);
            }

            return [x, y];
        }
    };

    return data.define("sprite", Sprite);
});