// Represents a texture overlay for a sprite
define(["data"], function (data) {

    var Tint = function () {

        // Todo:  Use texture instead.  RGBA text describing the color of this tint in the format:  'rgba(red, green, blue, alpha)'
        this.color = "rgba(255, 255, 255, 0.2)";

        // Id of the image to apply the tint
        this.image = 0;

        // Id of the texture
        this.texture = 0;
    };

    return data.define("tint", Tint);
});