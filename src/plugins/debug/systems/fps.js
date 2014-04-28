// Shows the current FPS in the top left corner.
define(["data"], function (data) {

    var fps = 0;

    var element = $("<div id='FPSCounter'></div>")
        .css({ color: "yellow", position: "absolute", "z-index": 900, "top": "10px", "left": "10px", "font-size": "16px" });

    $("body").append(element);

    setInterval(function() {
        $(element).text("FPS: " + fps);
    }, 1000);

    data.tick.on("time", function(tick) {
        fps = tick.fps;
    });
});