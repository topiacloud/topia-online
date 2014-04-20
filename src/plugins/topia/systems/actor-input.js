// Handles touch events for actors/items
define(["data"], function (data) {

    var selectedActor = 0;

    var sprites = data("sprite");
    var images = data("image");
    var actors = data("topia", "actor");

    // Associate actor's sprites with touch events
    /*sprites.on("save", function(sprite) {
        var actor = actors.first({ sprite: sprite.id });

        if (actor) {
            data("reaction").save({ type: "sprite", target: sprite.id, action: "touch" });
        }
    });*/

    actors.on("save", function(actor) {
        data("reaction").save({ type: "sprite", target: actor.sprite, action: "touch" });
    });

    // Enable selection of actors
    data("touch").on("save", function(touch) {
        if (touch.type == "sprite") {
            var actor = actors.first({ sprite: touch.target });

            if (actor && selectedActor != actor.id) {
                var sprite = sprites.get(actor.sprite);

                // Tint the actor's sprite
                var tinted = images.save({ copy: sprite.image });
                data("tint").save({ image: tinted.id });

                sprite.image = tinted.id;

                selectedActor = actor.id;
            }
        }
    });

    data("touch").on("remove", function(touch) {
        if (touch.type == "sprite") {

            var actor = actors.first({ sprite: touch.target });

            if (actor) {
                var sprite = sprites.get(actor.sprite);
                var image = images.get(sprite.image);

                sprite.image = images.get(image.copy).id;

                images.remove(image);

                if (selectedActor == actor.id) {
                    selectedActor = 0;
                }
            }
        }
    });
});