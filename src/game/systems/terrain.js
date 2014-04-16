// Converts terrain to sprites
define(["core/common/data"], function (data) {

    var terrains = data("terrain");
    var sprites = data("sprite");

    // Generate images for each terrain segment
    terrains.on("save", function (terrain) {

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

                sprites.save({ image: terrain.image, x: x + xOffset, y: y + yOffset, index: 0 });
                //self.add(new Topia.Sprite({ name: row + "_" + column, texture: texture, origin: [0.5, 0.5], position: [x + xOffset, y + yOffset] }));
            }
        }
    });
});