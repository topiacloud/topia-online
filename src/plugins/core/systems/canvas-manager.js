// Manages inserting/removing DOM canvas & associating drawable objects
define(["data"], function (data) {

    var lastCanvasId = 0;

    var initDrawable = function(drawable) {
        if (!drawable.canvas) {
            drawable.canvas = lastCanvasId;
        }
    };

    data("canvas").on("save", function (canvas) {

        lastCanvasId = canvas.id;

        canvas.width = canvas.width || 1;
        canvas.height = canvas.height || 1;

        var element = document.createElement("canvas");
        element.id = "canvas" + canvas.id;
        element.width = canvas.width;
        element.height = canvas.height;

        $("body").append(element);

        // Todo:  The canvas should be appended by an actual element management system
        data("element").save({ tag: "canvas", selector: "#" + element.id, type: "canvas", target: canvas.id });

        canvas.setCanvas(element);

        if (canvas.maximized) {
            canvas.maximize();
        }

        // Associate drawables
        data("rectangle").each(initDrawable);
        data("sprite").each(initDrawable);
        data("text").each(initDrawable);
    });

    data("rectangle").on("save", initDrawable);
    data("sprite").on("save", initDrawable);
    data("text").on("save", initDrawable);
});