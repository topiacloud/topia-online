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
    };

    return data.define("topia", "monument", Monument);
});