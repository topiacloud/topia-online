// Spawns the main game objects and initializes the world.
define(["core/common/data"], function (data) {

    var world = data("world");
    var entities = data("entity");
    var monuments = data("monument");
    var sprites = data("sprite");
    var terrains = data("terrain");

    world.on("save", function() {
        var entity = entities.save({ name: "Life Monument", x: 0, y: 0 });
        monuments.save({ entity: entity.id });

        //var group = data("group").save({});
        var sprite = sprites.save({ entity: entity.id, x: 0, y: 0, image: "content/assets/game/structures/monument.png", index: 1, group: 1 });
        //var region = data("region").save({ x: -96, y: -512, width: 192, height: 512, group: 1 });

        terrains.save({ x: 0, y: 0, width: 8192, height: 8192, image: "content/assets/game/environment/grass.png" });
    });
});