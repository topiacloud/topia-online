// Converts canvas touch events into camera-relative touch events
define(["../../common/data"], function (data) {

    data("touch").on("save", function(touch) {
        if (touch.type == "canvas") {
            var camera = data("camera").first({ canvas: touch.target });
            var canvas = data("canvas").get(touch.target);

            if (camera) {
                touch.type = "camera";
                touch.target = camera.id;
                touch.x = camera.x + touch.x - parseInt(canvas.width / 2);
                touch.y = camera.y + touch.y - parseInt(canvas.height / 2);
                touch.save();
            }
        }
    });
});