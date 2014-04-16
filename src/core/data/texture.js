// A simple 'repeated' graphic
define(["../common/data"], function (data) {

    var Texture = function () {

        // Text describing the color of this texture, or RGBA.
        this.color = "";
    };

    return data.define("texture", Texture);
});