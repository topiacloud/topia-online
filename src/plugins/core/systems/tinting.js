// Loads and initializes tint effect
define(["data"], function (data) {

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

    // When an image is loaded, apply applicable tints to it
    data.image.on("add", function(image) {
        if (image.isLoaded) {
            var tint = data.tint.first({ image: image.id });

            if (tint) {
                tintImage(tint, image);
            }
        }
    });

    // When a tint is saved, apply it to target image
    data.tint.on("add", function (tint) {

        var image = data.image.get(tint.image);

        if (image && image.isLoaded) {
            tintImage(tint, image);
        }
    });
});