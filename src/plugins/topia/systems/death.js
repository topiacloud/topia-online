// This will kill an actor which reaches 0 health.
define(["data"], function (data) {
    //When the health of a bodypart changes.
    data.topia.bodypart.on("health", function (bodypart) {
        var actor = data.topia.actor.get(bodypart.owner);
        
        //If the bodypart's health is below 0.
        if (bodypart.health <= 0) {
            //Bodyparts probably need sprites. For... removal.
            //var sprite = data.sprite.get(actor.sprite);

            //Give a message that the bodypart has been destroyed.
            console.log(bodypart.name + " has been destroyed.");
            //Remove the bodypart sprite?
            //data.sprite.remove(sprite);

            //Was the bodypart vital? 
            if (bodypart.isVital == true) {
                //Create a new death in the table.
                data.topia.death.add({ name: actor.name, type: actor.type, time: Date.now() });
                //Remove the actor.
                data.topia.actor.remove(actor);
            };
        };
    });
});