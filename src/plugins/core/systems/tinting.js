// Loads and initializes tint effect
define(["data"], function (data) {

    var tints = data("tint");
    var images = data("image");

    var tintImage = function(tint, image) {
        var tempCanvas = document.createElement("canvas");
        tempCanvas.width = image.width;
        tempCanvas.height = image.height;

        var context = tempCanvas.getContext("2d");

        context.fillStyle = tint.color.toString();
        context.fillRect(0, 0, image.width, image.height);

        context.globalCompositeOperation = "destination-atop";
        context.drawImage(image.getCanvas(), 0, 0);

        var imageContext = image.getContext();
        imageContext.clearRect(0, 0, image.width, image.height);
        imageContext.drawImage(tempCanvas, 0, 0);
    };

    images.on("save", function(image) {
        if (image.isLoaded) {
            var tint = tints.first({ image: image.id });

            if (tint) {
                tintImage(tint, image);
            }
        }
    });

    tints.on("save", function (tint) {

        var image = images.get(tint.image);

        if (image && image.isLoaded) {
            tintImage(tint, image);
        }
    });
});