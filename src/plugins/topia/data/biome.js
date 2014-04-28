//Biomes are used to define areas of the world that have certain terrain features and environments.
define(["data"], function (data) {
    
    var Biome = function () {
        
        //The name of the biome.
        this.name = "";

        //Which monument is generating this biome.
        this.monument = 0;

        //A modifier which adjusts the number of trees and branches in a biome. Higher is more.
        this.trees = 0;

        //A modifier which adjusts the amount of clutter (flowers, bushes, etc) in a biome.
        this.clutter = 0;

        //A modifier which adjusts the number of rocks and/or mineral deposits in an area.
        this.minerals = 0;

        //A modifier which adjusts the amount of wildlife in a biome.
        this.life = 0;
        
        //Placeholder for a temperature system.
        this.temperature = 0;
    };

    return data.define("topia", "biome", Biome);
});