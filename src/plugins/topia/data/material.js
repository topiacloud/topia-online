// A material is a substance in the game world. Examples include iron, wood, and stone.
define(["data"], function (data) {

    var Material = function () {
      
        //Resistance is a placeholder that represents how often the material resists degradation.
        this.resistance = 0;
        
        //Strength is a placeholder that represents how durable the material is. An object's size and material strength will determine it's health.
        this.strength = 0;

        //The name of the material.
        this.name = "";

        //This property determines if the material will catch fire from normal flames.
        this.flammable = false;

        //The weight of the material per size unit.
        this.weight = 0
    };

    return data.define("topia", "material", Material);
});