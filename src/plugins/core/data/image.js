// Represents a 2d graphical image, which gets loaded onto an offscreen canvas
define(["data", "../common/cache"], function (data, cache) {

    var Image = function () {

        // (Optional) A url to an image file, if applicable
        this.url = "";

        // (Optional) Creates a copy of the given image
        this.copy = 0;

        // (Internal) The total width of the image.
        this.width = 0;

        // (Internal) The total height of the image.
        this.height = 0;

        // (Internal) Indicates whether the image has completed loading
        this.isLoaded = false;
    };

    Image.prototype = {

        setCanvas: function(canvas) {

            if (canvas) {
                this.width = canvas.width;
                this.height = canvas.height;
                this.isLoaded = true;
                cache.set("image" + this.id, canvas);
            } else {
                this.isLoaded = false;
                this.width = 0;
                this.height = 0;
                cache.remove("image" + this.id);
            }
        },

        getCanvas: function() {
            return cache.get("image" + this.id);
        },

        getContext: function() {
            return this.getCanvas().getContext("2d");
        },

        fill: function(style) {
            var context = this.getContext();

            if (context) {
                context.fillStyle = style.toString();
                context.fillRect(0, 0, this.width, this.height);
            }
        }
    };

    return data.define("image", Image);
});
