// This system simply creates some default data for things like materials, items, etc.
define(["data"], function (data) {

    var materials = data("topia", "material");
    var items = data("topia", "item");
    var world  = data("world");
    var sprites = data("sprite");
    var actors = data("topia", "actor");

    world.on("save", function () {

        materials.save({ name: "Flesh", resistance: 0, strength: 1, flammable: true });
        materials.save({ name: "Wood", resistance: 1, strength: 2, flammable: true });
        materials.save({ name: "Stone", resistance: 6, strength: 3, flammable: false });
        materials.save({ name: "Iron", resistance: 4, strength: 6, flammable: false });
        materials.save({ name: "Bone", resistance: 2, strength: 2, flammable: false });
        materials.save({ name: "Scale", resistance: 1, strength: 1, flammable: true });
        materials.save({ name: "Leather", resistance: 1, strength: 1, flammable: true });
        materials.save({ name: "Bronze", resistance: 5, strength: 4, flammable: false });
        materials.save({ name: "Steel", resistance: 8, strength: 8, flammable: false });

        var sprite = sprites.save({ image: "content/assets/game/environment/tree.png"});
        actors.save({ x: 50, y: 50, sprite: sprite.id });

        var rockSprite = sprites.save({ image: "content/assets/game/environment/stone.png"});
        items.save({ name: "a rock", health: 5, material: 3, sprite: rockSprite.id, x: -50, y: -50 });
    });
});