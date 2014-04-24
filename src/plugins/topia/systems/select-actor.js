// Handles touch events for actors/items
define(["data"], function (data) {

    var selectedActor = 0;

    // Associate actor's sprites with touch events
    /*sprites.on("save", function(sprite) {
        var actor = actors.first({ sprite: sprite.id });

        if (actor) {
            data("reaction").save({ type: "sprite", target: sprite.id, action: "touch" });
        }
    });*/

    data.topia.actor.on("add", function(actor) {
        data.reaction.add({ type: "sprite", target: actor.sprite, action: "touch" });
    });

    // Enable selection of actors
    data.touch.on(["type"], function(touch) {

        if (touch.type == "sprite") {
            
            var actor = data.topia.actor.first({ sprite: touch.target });

            if (actor && selectedActor != actor.id) {
                var sprite = data.sprite.get(actor.sprite);

                // Tint the actor's sprite
                var tinted = data.image.add({ copy: sprite.image });
                data.tint.add({ image: tinted.id });

                sprite.image = tinted.id;

                selectedActor = actor.id;
            }
        }
    });

    // If an actor is selected and their sprite changes, update them accordingly
    /*sprites.on("save", function(sprite) {
        if (selectedActor) {
            var actor = actors.first({ sprite: sprite.id });

            if (actor && selectedActor == actor.id) {
                var tint = data("tint").first({ image: sprite.image });

                if (tint) {
                    
                }
                //var image = images.first(sprite.image);
            }
        }
    });*/

    // Remove the tinted sprite when mouse leaves
    data.touch.on("remove", function(touch) {

        if (touch.type == "sprite") {

            var actor = data.topia.actor.first({ sprite: touch.target });

            if (actor) {
                var sprite = data.sprite.get(actor.sprite);
                var image = data.image.get(sprite.image);

                // Todo:  Remove tint

                var clone = data.image.get(image.copy);
                sprite.image = clone.id;

                data.image.remove(image);

                if (selectedActor == actor.id) {
                    selectedActor = 0;
                }
            }
        }
    });
});