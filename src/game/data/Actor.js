// An actor is an entity in the game world that typically has expanded interactability.
define(["core/common/data"], function (data) {
    
    var Actor = function () {
        
        //The x position of the actor.
        this.x = 0;

        //The y position of the actor.
        this.y = 0;

        //The type of actor this is. Examples might include tree, human, wolf, etc
        this.actor = "";

        //The health of an actor. When this reaches 0, typically the actor is dead. Default to 100?
        this.health = 1;

        //The sprite this actor uses, referenced by id.
        this.sprite = 0;
    };

    return data.define("actor", Actor);
});