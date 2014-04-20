// This will kill an actor which reaches 0 health.
define(["data"], function (data) {
    
    var actors = data("topia", "actor");
    var death = data("topia", "death");
    var sprites = data("sprite");

    actors.on("save", function (actor) {

        if (actor.health <= 0) {
            var sprite = sprites.get(actor.sprite);
            console.log(actor.name + " has died.");
            sprites.remove(sprite);
            actors.remove(actor);
            death.save({ name: actor.name, type: actor.type, time: Date.now() });
        }
    });
});