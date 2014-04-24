define({

    name: "Topia Online",

    data: [
        "action",
        "actor",
        "death",
        "item",
        "material",
        "monument",
        "terrain",
        "trait",
        "component"
    ],

    systems: [
        "terrain",
        "spriteglue",
        "dataPopulation",
        "select-actor",
        "action"
    ],

    start: function(data) {
        
        data.world.on("add", function() {

            // Create the canvas
            var canvas = data.canvas.add({ maximized: true });

            // Create the camera
            data.camera.add({ canvas: canvas.id, x: 0, y: 0 });

            // Create the terrain
            data.topia.terrain.add({ x: 0, y: 0, width: 4096, height: 4096, image: "content/assets/game/environment/grass.png" });

            // Create the monument
            var monumentSprite = data.sprite.add({ x: 0, y: 0, image: "content/assets/game/structures/monument.png" });

            data.topia.actor.add({ name: "Life Monument", x: 0, y: 0, sprite: monumentSprite.id });
        });
    }
});