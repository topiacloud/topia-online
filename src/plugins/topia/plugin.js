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
        "component",
        "bodypart",
        "biome"
    ],

    systems: [
        "terrain",
        "lighting",
        "spriteglue",
        "dataPopulation",
        "select-actor",
        "action",
        "spriteAssignment",
        "component",
        "bodypart",
        "biome",
        //"worldSpawn",
        "monument"
    ],

    start: function(data) {
        
        // Create the canvas
        var canvas = data.canvas.add({ maximized: true });

        // Make canvas touchable
        data.touchable.add({ type: "canvas", target: canvas.id });

        // Create the camera
        var camera = data.camera.add({ x: 0, y: 0 });

        // Create the scene that everything gets added to
        data.scene.add({ canvas: canvas.id, camera: camera.id, isDefault: true });

        // Create the terrain
        data.topia.terrain.add({ x: 0, y: 0, width: 8192, height: 8192, image: "content/assets/game/environment/grass.png" });

        // Create the monument
        var monumentSprite = data.sprite.add({ x: 0, y: 0, image: "content/assets/game/structures/monument.png" });

        data.topia.actor.add({ name: "Life Monument", x: 0, y: 0, sprite: monumentSprite.id, type: "monument" });

        // Monument lightsource
        data.sprite.add({ image: "plugins/topia/content/images/effects/light/light.png", x: 0, y: 0, index: 10, anchorX: 0.5, anchorY: 1 });
    }
});