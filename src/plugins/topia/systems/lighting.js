// Converts terrain to sprites
define(["data"], function (data) {

    data.world.on("add", function() {

        var canvas = data.canvas.add({ maximized: true, index: 2 });
        var camera = data.camera.first();
        var scene = data.scene.add({ canvas: canvas.id, camera: camera.id });

        var radius = 4096;
        var originX = 0;
        var originY = 0;
        var flip = "";
        var rows = 16;
        var columns = 16;
        var width = radius / rows * 2;
        var height = radius / columns * 2;

        for (var row = 0; row < rows; row++) {
            for (var column = 0; column < columns; column ++) {

                var x = (width * column) - radius;
                var y = (height * row) - radius;
                var index = column + (row * columns);

                var id = (column % 8);
                id += row * 8;
                id = id % 64;
                id += 1;

                if (x >= 0 && y >= 0) {
                    flip = "both";
                    x = radius - x;
                    y = radius - y;
                }
                else if (x >= 0) {
                    flip = "horizontal";
                    x = radius - x;
                }
                else if (y >= 0) {
                    flip = "vertical";
                    y = radius - y;
                } else {
                    flip = "";
                }

                data.sprite.add({ flip: flip, image: "plugins/topia/content/images/effects/light/" + id + ".png", x: x + originX, y: y + originY, index: 2, anchorX: 0, anchorY: 0, scene: scene.id });
            }
        }

        data.fill.add({ composite: "source-out", index: 10, scene: scene.id });
    });
});