// Converts terrain to sprites
define(["data"], function (data) {

    // Generate images for each terrain segment
    data.topia.terrain.on("add", function (terrain) {

        var x = 0 - (terrain.width / 2);
        var y = 0 - (terrain.height / 2);

        // grass.png
        var textureWidth = 512;
        var textureHeight = 512;

        var width = terrain.width / textureWidth;
        var height = terrain.height / textureHeight;

        for (var row = 0; row < width; row++) {
            for (var column = 0; column < height; column++) {
                var xOffset = row * textureWidth;
                var yOffset = column * textureHeight;

                data.sprite.add({ image: terrain.image, x: x + xOffset, y: y + yOffset, index: -1 });
            }
        }
    });
});