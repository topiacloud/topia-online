// Represents a texture overlay for a sprite
define(["../common/data"], function (data) {

    var Tint = function () {

        // Todo:  Use texture instead.  RGBA text describing the color of this tint in the format:  'rgba(red, green, blue, alpha)'
        this.color = "rgba(255, 255, 255, 0.5)";

        // Id of sprite that this tinting applies to, if applicable
        this.sprite = 0;

        // Id of the texture
        this.texture = 0;
    };

    return data.define("tint", Tint);
});