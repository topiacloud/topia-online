// A monument is a game 'hub' and also a region for world respawning
define(["data"], function (data) {

    var Monument = function () {

        //The x position of the terrain center.
        this.x = 0;

        // The y position of the terrain center.
        this.y = 0;

        // The total width of the bounds of the terrain.
        this.width = 0;

        // The total height of the bounds of the terrain.
        this.height = 0;

        //The radius of the monument's influence. This is the radius at max "intensity".
        this.radius = 4096;

        //The id of the actor this monument belongs to.
        this.owner = 0;

        //The type of monument this is. This determines which biome the monument radiates.
        this.type = "";

        //The slider value for how the monument influences flora.
        this.flora = 0;

        //The slider value for how the monument influences minerals.
        this.minerals = 0;

        //The slider value for how the monument influences water content.
        this.water = 0;

        //The slider value for how the monument influences wind.
        this.wind = 0;

        //The slider value for how the monument influences the ruggedness of the terrain.
        this.rugged = 0;

        //The slider value for how the monument influence the frequency of wildlife.
        this.wildlife = 0;

    };

    return data.define("topia", "monument", Monument);
});