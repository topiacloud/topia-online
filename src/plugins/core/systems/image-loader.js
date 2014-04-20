// Handles loading images
define(["data", "../common/loader"], function (data, Loader) {

    var images = data("image");
    var loaders = {};

    var setCanvas = function(image) {
        
        var canvas = document.createElement("canvas");

        canvas.width = image.width || 1;
        canvas.height = image.height || 1;

        image.setCanvas(canvas);
        image.save();
    };

    var onLoad = function(url, canvas) {
        var image = images.first({ url: url });
        
        if (image) {
            image.setCanvas(canvas);
            image.save();
        }
    };

    // Copies image 'from' onto 'to'
    var copy = function(from, to) {
        
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");

        canvas.width = to.width = from.width;
        canvas.height = to.height = from.height;

        context.drawImage(from.getCanvas(), 0, 0);

        to.setCanvas(canvas);
        to.save();
    };

    images.on("remove", function(image) {
        image.setCanvas(null);
    });

    // New image is created
    images.on("save", function(image) {
        if (!image.isLoaded) {

            if (image.copy) {
                var copyImage = images.first(image.copy);

                if (copyImage && copyImage.isLoaded) {
                    copy(copyImage, image);
                }

                return;
            }

            if (!image.url) {
                image.isLoaded = true;
                setCanvas(image);
                return;
            }

            var loader = loaders[image.url];

            if (loader) {
                if (loader.isLoaded) {
                    throw "Duplicate image loaded: " + image.url;
                }
            } else {
                loader = new Loader();
                loaders[image.url] = loader;
                loader.load(image.url, onLoad);
            }
        } else {
            // Any copies of this image?
            images.each({ copy: image.id }, function(target) {
                copy(image, target);
            });
        }
    });
});