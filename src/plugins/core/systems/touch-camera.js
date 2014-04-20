// Converts canvas touch events into camera-relative touch events
define(["data"], function (data) {

    var touches = data("touch");

    // Create camera touch relative to canvas touches
    touches.on("save", function(touch) {
        if (touch.type == "canvas") {
            var camera = data("camera").first({ canvas: touch.target });

            if (camera) {
                var cameraTouch = touches.firstOrNew({ type: "camera", target: camera.id });

                cameraTouch.type = "camera";
                cameraTouch.target = camera.id;
                cameraTouch.x = camera.x + touch.x;
                cameraTouch.y = camera.y + touch.y;
                cameraTouch.state = touch.state;
                cameraTouch.save();
            }
        }
    });

    // Remove camera 'touch' when 'canvas' touch is removed
    touches.on("remove", function(touch) {
        if (touch.type == "canvas") {
            var camera = data("camera").first({ canvas: touch.target });

            if (camera) {
                var cameraTouch = touches.first({ type: "camera", target: camera.id });

                if (cameraTouch) {
                    touches.remove(cameraTouch);
                }
            }
        }
    });
});