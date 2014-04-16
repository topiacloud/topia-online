// Represents a 2d graphical image file reference.
define(["../common/data"], function (data) {

    var Image = function () {

        // The total width of the image.
        this.width = 0;

        // The total height of the image.
        this.height = 0;

        // The URI of the image, can be relative or absolute.
        this.url = "";
    };

    return data.define("image", Image);
});
