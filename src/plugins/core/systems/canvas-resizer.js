// Automatically resizes 'maximized' canvases to fit the screen.
define(["data"], function (data) {

    var canvases = data("canvas");

    $(window).resize(function () {
        canvases.each(function(canvas) {
            if (canvas.maximized) {
                canvas.maximize();
            }
        });
    });
});