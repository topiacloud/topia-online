// Automatically resizes 'maximized' canvases to fit the screen.
define(["../../common/data", "../../common/cache"], function (data, cache) {

    var canvases = data("canvas");

    $(window).resize(function (e) {
        _.each(canvases.get(), function (each) {
            if (each.maximized) {
                var canvas = cache.get("canvas" + each.id);
                canvas.maximize();
            }
        });
    });
});