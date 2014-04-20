//An action is anything that is performed by an actor in the game world.
define(["data"], function (data) {

    var Action = function () {
    
        //The name of the action being performed. Names must be unique.
        this.name = "";
        
        //The id of the actor performing the action.
        this.owner = 0;

        //The type of entity performing the action. Typically this will be an item or actor.
        this.type = "";

        //The target of the action. Some actions may not have a target. The target can be virtually anything, dependant on the action being performed.
        this.target = 0;

        //The x target of an action. This is used when an action targets a position rather than an object.
        this.targetX = null;

        //The y target of an action. This is used when an action targets a position rather than an object.
        this.targetY = null;

        //A timestamp of the action being performed.
        this.time = Date.now();

        //The speed of the action. This is in milliseconds. Some actions may be "instant".
        this.speed = 5000;
    };

    return data.define("topia", "action", Action);
});