define(function () {

    var canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;

    var context = canvas.getContext("2d");

    return {

        getPixel: function(image, x, y) {
            context.clearRect(0, 0, 1, 1);
            context.drawImage(image, x, y, 1, 1, 0, 0, 1, 1);
            return context.getImageData(0, 0, 1, 1).data;
        }
    };
});