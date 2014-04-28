// Handles camera positioning and updates
define(["data"], function (data) {

    // Mousewheel zooming for the camera
    data.touch.on(["add", "state"], function(touch) {
        if (touch.state == "wheel" && touch.type == "canvas") {
            var scene = data.scene.first({ canvas: touch.target });

            if (scene) {
                var camera = data.camera.get(scene.camera);

                if (camera) {
                    camera.zoom += touch.button * camera.zoomStep;

                    if (camera.zoom > camera.maxZoom) {
                        camera.zoom = camera.maxZoom;
                    }
                    else if (camera.zoom < camera.minZoom) {
                        camera.zoom = camera.minZoom;
                    }
                }
            }
        }
    });


    // Update visual element offsets when camera moves
    /*data.camera.on(["x", "y"], function(camera) {
        data.scene.each({ camera: camera.id }, function(scene) {
            var visuals = data.visual.get({ scene: scene.id });
        });
    });*/
});