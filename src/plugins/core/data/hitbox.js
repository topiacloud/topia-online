// The hitbox data type, looks for hitboxes that overlap one another and creates collision data types when found
define(["data"], function (data) {
    
    var Hitbox = function () {

        // Current X position of hitbox
        this.x = null;

        // Previous X position of the hitbox
        this.lastX = null;
        
        // Current Y position of hitbox
        this.y = null;

        // Previous Y position of the hitbox
        this.lastY = null;

        // Width of hitbox
        this.width = null;

        // Height of hitbox
        this.height = null;

    };

    return data.define("hitbox", Hitbox);
});