// An actor is an entity in the game world that typically has expanded interactability.
define(["data"], function (data) {
    
    var Actor = function () {
        
        //The x position of the actor.
        this.x = 0;

        //The y position of the actor.
        this.y = 0;

        //The name of the actor.
        this.name = "";

        //The type of actor this is. Examples might include tree, human, wolf, etc.
        this.type = "";

        //The health of an actor. When this reaches 0, typically the actor is dead. This is a placeholder unti BPP is implemented.
        this.health = 100;

        //The sprite this actor uses, referenced by id.
        this.sprite = 0;

        //The size of the actor. Used for health calculations. This is a placeholder for now.
        this.size = 100;

        //What the actor is primarily constructed of. This will be an integer referencing the material table. Defaults to flesh.
        this.material = 1;
    };

    return data.define("topia", "actor", Actor);
});