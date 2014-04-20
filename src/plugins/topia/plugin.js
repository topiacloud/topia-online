define([
    "data",

    "./data/action",
    "./data/actor",
    "./data/death",
    "./data/item",
    "./data/material",
    "./data/monument",
    "./data/terrain",

    "./systems/actor-input",
    "./systems/terrain"

], function(data) {

    data("world").on("save", function() {

        // Create the canvas
        var canvas = data("canvas").save({ maximized: true });

        // Create the camera
        data("camera").save({ canvas: canvas.id, x: 0, y: 0 });

        // Create the terrain
        data("topia", "terrain").save({ x: 0, y: 0, width: 4096, height: 4096, image: "content/assets/game/environment/grass.png" });

        // Create the monument
        var monumentSprite = data("sprite").save({ x: 0, y: 0, image: "content/assets/game/structures/monument.png" });

        data("topia", "actor").save({ name: "Life Monument", x: 0, y: 0, sprite: monumentSprite.id });
    });
});