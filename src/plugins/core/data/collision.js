// The collision data type, looks for hitboxes that overlap one another and creates collision data types when found
define(["data"], function (data) {
    
    var Collision = function () {

        // The ID of the hitbox interacting with the other hitbox
        this.hitboxA = null;

        // The ID of the hitbox hit
        this.hitboxB = null;

        // hitbox A step back X position
        this.x = null;

        // hitbox A step back Y position
        this.y = null;
    };

    return data.define("collision", Collision);
});