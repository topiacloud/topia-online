// Shows the current FPS in the top left corner.
define(["data"], function (data) {

    var text = data.text.add({ text: "FPS: 60", x: 25, y: 25, color: "yellow" });

    data.tick.on("time", function(tick) {
        text.text = "FPS: " + tick.fps;
    });
});