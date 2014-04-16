// Shows the current FPS in the top left corner.
define(["../../common/data"], function (data) {

    data("world").on("save", function() {
        var text = data("text").save({ text: "FPS: 60", x: 25, y: 25, color: "yellow" });

        data("frame").on("save", function (frame) {
            text.text = "FPS: " + frame.fps;
            text.save();
        });
    });
});