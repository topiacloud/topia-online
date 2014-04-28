//This system handles assigning biomes to the various corners of the world.
define(["data"], function (data) {

    //When a monument is added.
    data.topia.monument.on("add", function (monument) {
        var biome = data.topia.biome.add({ });

        if (monument.type == "plains") {
            biome.name = "plains";
            biome.monument = monument.id;
            biome.trees = (1+(monument.flora));
            biome.clutter = (1000+monument.flora);
            biome.minerals = (1+monument.minerals);
            biome.life = (5+monument.wildlife);
        };

        if (monument.type == "forest") {
            biome.name = "forest";
            biome.monument = monument.id;
            biome.trees = (15+(monument.flora));
            biome.clutter = (80+monument.flora);
            biome.minerals = (0+monument.minerals);
            biome.life = (10+monument.wildlife);
        }
    });
});