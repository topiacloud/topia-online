// This system simply creates some default data for things like materials, items, etc.
define(["data"], function (data) {

    var materials = data("topia", "material");
    var items = data("topia", "item");
    var world  = data("world");
    var sprites = data("sprite");
    var actors = data("topia", "actor");
    var traits = data("topia", "trait");
    var components = data("topia", "component");

    world.on("save", function () {

        //Let's set the materials we use in the game. Might get rid of this in favor of another method of doing it, but it's whatever.
        materials.save({ name: "Flesh", resistance: 0, strength: 1, flammable: true });
        materials.save({ name: "Wood", resistance: 1, strength: 2, flammable: true });
        materials.save({ name: "Stone", resistance: 6, strength: 3, weight: 3, flammable: false });
        materials.save({ name: "Iron", resistance: 4, strength: 6, flammable: false });
        materials.save({ name: "Bone", resistance: 2, strength: 2, flammable: false });
        materials.save({ name: "Scale", resistance: 1, strength: 1, flammable: true });
        materials.save({ name: "Leather", resistance: 1, strength: 1, flammable: true });
        materials.save({ name: "Bronze", resistance: 5, strength: 4, flammable: false });
        materials.save({ name: "Steel", resistance: 8, strength: 8, flammable: false });

        //Save a sprite for a tree.
        var sprite = sprites.save({ image: "content/assets/game/environment/tree.png"});

        //Set the sprite to the tree actor so that the spriteglue can work.
        actors.save({ x: 200, y: 200, sprite: sprite.id });

        //Save the item and set it's sprite to the rock sprite above. The glue will take care of the rest.
        items.save({ name: "a rock", x: -200, y: -200 });
        items.save({ name: "a rock", x: -250, y: -250 });

        //Filter the rocks from our item data.
        var rockFilter = items.get().filter(function (item) {
            return (item.name == "a rock");
        });

        //We check each item. If it's "a rock", we create a sprite for it, create the component for it, and assign the component's owner.
        items.each(function (item) {
            if (item.name == "a rock") {
                item.sprite = sprites.save({ image: "content/assets/game/environment/stone.png"}).id;
                components.save({ name: "a rock", health: 100, size: 1, material: 3, owner: item.id});
                items.save(item);
            };
        });

        //Go ahead and calculate the weight of each component. This will probably get tossed in the weight system when calculating an item's final weight. 
        components.each(function (component) {
           component.weight = (component.size*materials.get(component.material).weight);
        });
    });
});