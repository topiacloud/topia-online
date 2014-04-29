// Handles camera positioning and updates
define(["data", "../common/geometry"], function (data, geometry) {

    var sprites = data.sprite.index("scene");
    var scenes = data.scene.index("camera");

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

    var updateCameraBounds = function(camera) {

        // Todo:  Multiply by zoom

        var width = Math.round(camera.width / 2);
        var height = Math.round(camera.height / 2);
        var x = Math.round(camera.x);
        var y = Math.round(camera.y);

        camera.bounds[0] = x - width;
        camera.bounds[1] = y - height;
        camera.bounds[2] = x + width;
        camera.bounds[3] = y + height;
    };

    var updateCameraDimensions = function(camera, canvas) {
        camera.width = canvas.width;
        camera.height = canvas.height;
    };

    // (Culling) Update the visibility of a visual element
    var updateVisibility = function(sprite, camera) {
        if (!sprite.visible || sprite.width <= 0 || sprite.height <= 0) {
            return;
        }

        var x = sprite._x;
        var y = sprite._y;

        var width = x + sprite._width;
        var height = y + sprite._height;

        if (sprite._scaleY < 0) {
            y += (sprite._height * sprite._scaleY);
        }

        if (sprite._scaleX < 0) {
            x += (sprite._width * sprite._scaleX);
        }

        // Max sprite size is 512, just check if within 512 of camera?


        // Todo:  Create/remove visual elements?
        //sprite._visible = true;
        sprite._visible = geometry.doesRectangleOverlap(camera.bounds[0], camera.bounds[1], camera.bounds[2], camera.bounds[3], x, y, width, height);
    };

    // Update the bounds of a visual element
    var updateVisualBounds = function(sprite, camera) {

        if (sprite.width <= 0 || sprite.height <= 0) {
            return;
        }

        /*sprite._width = Math.round(sprite.width * camera.zoom);
        sprite._height = Math.round(sprite.height * camera.zoom);

        if (sprite._width <= 0 || sprite._height <= 0) {
            sprite._visible = false;
        }

        // Take the base position ...
        var x = sprite.x;
        var y = sprite.y;

        // Subtract the anchor position
        if (sprite.sourceX) {
            x += sprite.sourceX - (sprite.sourceSizeWidth * sprite.anchorX);
            y += sprite.sourceY - (sprite.sourceSizeHeight * sprite.anchorY);
        } else {
            x -= (sprite.width * sprite.anchorX * sprite._scaleX);
            y -= (sprite.height * sprite.anchorY * sprite._scaleY);
        }

        // Multiply by the scale / zoom
        sprite._x = Math.round(x * camera.zoom);
        sprite._y = Math.round(y * camera.zoom);*/

        // Update sprite bounds
        sprite._x = Math.round((sprite.x - (sprite.width * sprite.anchorX * sprite._scaleX)) * camera.zoom);
        sprite._y = Math.round((sprite.y - (sprite.height * sprite.anchorY * sprite._scaleY)) * camera.zoom);
        sprite._width = Math.round(sprite.width * camera.zoom);
        sprite._height = Math.round(sprite.height * camera.zoom);
    };

    // Initialize the camera bounds once it's first added
    data.camera.on("add", function(camera) {
        camera.bounds = [0, 0, 0, 0];
    });

    // Update camera dimensions when canvas updates
    data.canvas.on(["width", "height"], function(canvas) {
        data.scene.each({ canvas: canvas.id }, function(scene) {
            var camera = data.camera.find(scene.camera);

            updateCameraDimensions(camera, canvas);
            updateCameraBounds(camera);
        });
    });

    // Update camera transforms when camera position changes
    data.camera.on(["x", "y"], function(camera) {

        // Todo:  Just shift camera bounds
        updateCameraBounds(camera);

        scenes.each(camera.id, function(scene) {
            sprites.each(scene.id, function(sprite) {
                // Todo: Shift sprite position?
                updateVisibility(sprite, camera);
            });
        });
    });

    // Update camera bounds when zoom changes
    data.camera.on("zoom", function(camera) {

        updateCameraBounds(camera);

        scenes.each(camera.id, function(scene) {
            sprites.each(scene.id, function(sprite) {
                updateVisualBounds(sprite, camera);
                updateVisibility(sprite, camera);
            });
        });
    });

    // Update camera when scene is added
    data.scene.on("add", function(scene) {
        var camera = data.camera.find(scene.camera);
        var canvas = data.canvas.find(scene.canvas);

        updateCameraDimensions(camera, canvas);
        updateCameraBounds(camera);
    });

    // Todo:  Change to visual
    data.sprite.on(["x", "y", "width", "height", "scene", "_scaleX", "_scaleY"], function(sprite) {
        var scene = data.get(sprite.scene);
        var camera = data.get(scene.camera);

        updateVisualBounds(sprite, camera);
        updateVisibility(sprite, camera);
    });
});