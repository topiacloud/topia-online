//This system makes sure sprites follow the actors around.
define(["data"], function (data) {

    var actors = data("topia", "actor");
    var sprites = data("sprite");
    var frames = data("frame");
    var items = data("topia", "item");

    actors.on("save", function(actor) {
        var sprite = sprites.get(actor.sprite);

        if (sprite) {
            sprite.x = actor.x;
            sprite.y = actor.y;
            sprite.save();
        }
    });

    items.on("save", function(item) {
        var sprite = sprites.get(item.sprite);

        if (sprite) {
            sprite.x = item.x;
            sprite.y = item.y;
            sprite.save();
        }
    });

    /*frames.on("save", function () {
        actors.each(function (actor) {
            if (actor.sprite) {
                var sprite = sprites.get(actor.sprite);

                sprite.x = actor.x;
                sprite.y = actor.y;
            };
        });

        items.each(function (item) {
            if (item.sprite && !item.owner) {
                var sprite = sprites.get(item.sprite);

                sprite.x = item.x;
                sprite.y = item.y;
            };
        });
    });*/
});