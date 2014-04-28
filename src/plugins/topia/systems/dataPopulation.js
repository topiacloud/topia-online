// This system simply creates some default data for things like materials, items, etc.
define(["data"], function (data) {

    data.world.on("add", function () {

        //Let's set the materials we use in the game.
        data.topia.material.add({ name: "Flesh", resistance: 0, strength: 1, flammable: true });
        data.topia.material.add({ name: "Wood", resistance: 1, strength: 2, flammable: true });
        data.topia.material.add({ name: "Stone", resistance: 6, strength: 3, weight: 3, flammable: false });
        data.topia.material.add({ name: "Iron", resistance: 4, strength: 6, flammable: false });
        data.topia.material.add({ name: "Bone", resistance: 2, strength: 2, flammable: false });
        data.topia.material.add({ name: "Scale", resistance: 1, strength: 1, flammable: true });
        data.topia.material.add({ name: "Leather", resistance: 1, strength: 1, flammable: true });
        data.topia.material.add({ name: "Bronze", resistance: 5, strength: 4, flammable: false });
        data.topia.material.add({ name: "Steel", resistance: 8, strength: 8, flammable: false });

        //We need biomes for the world. Let's make some.
        //data.topia.biome.add({ name: "forest", trees: 15, clutter: 80, minerals: 0, life: 10 });
        //data.topia.biome.add({ name: "plains", trees: 0, clutter: 100, minerals: 1, life: 5 });

        //Go ahead and calculate the weight of each component. This will probably get tossed in the weight system when calculating an item's final weight. 
        //data.topia.component.each(function (component) {
        //   component.weight = (component.size*data.topia.material.get(component.material).weight);
        //});
    });
});