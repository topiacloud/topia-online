// Converts canvas touch events into camera-relative touch events
define(["data"], function (data) {

    // Create camera touch relative to canvas touches
    data.touch.on(["x", "y", "state"], function(touch) {
        if (touch.type == "canvas") {
            var scene = data.scene.first({ canvas: touch.target });

            if (scene) {
                var camera = data.camera.get(scene.camera);

                if (camera) {
                    var cameraTouch = data.touch.firstOrNew({ type: "camera", target: camera.id });

                    cameraTouch.type = "camera";
                    cameraTouch.target = camera.id;
                    cameraTouch.x = camera.x + touch.x;
                    cameraTouch.y = camera.y + touch.y;
                    cameraTouch.state = touch.state;
                }
            }
        }
    });

    // Remove camera 'touch' when 'canvas' touch is removed
    data.touch.on("remove", function(touch) {
        if (touch.type == "canvas") {
            var scene = data.scene.first({ canvas: touch.target });

            if (scene) {
                var cameraTouch = data.touch.first({ target: scene.camera });

                if (cameraTouch) {
                    data.touch.remove(cameraTouch);
                }
            }
        }
    });
});