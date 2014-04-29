// Manages inserting/removing DOM canvas & associating drawable objects
define(["data"], function (data) {

    data.canvas.on("add", function (canvas) {

        canvas.width = canvas.width || 1;
        canvas.height = canvas.height || 1;

        var element = document.createElement("canvas");
        element.id = "canvas" + canvas.id;
        element.width = canvas.width;
        element.height = canvas.height;

        $("body").append(element);

        $(element).css({ "z-index": canvas.index }).attr("class", "topia-canvas");

        // Todo:  The canvas should be appended by an actual element management system
        data.element.add({ tag: "canvas", selector: "#" + element.id, type: "canvas", target: canvas.id });

        canvas.setCanvas(element);

        if (canvas.maximized) {
            canvas.maximize();
        }
    });
});