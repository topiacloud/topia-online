// Manages inserting/removing DOM canvas & associating drawable objects
define(["data"], function (data) {

    var lastCanvasId = 0;

    var initDrawable = function(drawable) {
        if (!drawable.canvas) {
            drawable.canvas = lastCanvasId;
        }
    };

    data.canvas.on("add", function (canvas) {

        lastCanvasId = canvas.id;

        canvas.width = canvas.width || 1;
        canvas.height = canvas.height || 1;

        var element = document.createElement("canvas");
        element.id = "canvas" + canvas.id;
        element.width = canvas.width;
        element.height = canvas.height;

        $("body").append(element);

        // Todo:  The canvas should be appended by an actual element management system
        data.element.add({ tag: "canvas", selector: "#" + element.id, type: "canvas", target: canvas.id });

        canvas.setCanvas(element);

        if (canvas.maximized) {
            canvas.maximize();
        }

        // Associate drawables
        data.rectangle.each(initDrawable);
        data.circle.each(initDrawable);
        data.line.each(initDrawable);
        data.sprite.each(initDrawable);
        data.text.each(initDrawable);
    });

    // Associate drawables with canvas
    data.rectangle.on("add", initDrawable);
    data.circle.on("add", initDrawable);
    data.line.on("add", initDrawable);
    data.sprite.on("add", initDrawable);
    data.text.on("add", initDrawable);
});