//This system makes sure sprites follow the actors around.
define(["data"], function (data) {

    //When an actor's sprite changes.
    data.topia.actor.on("sprite", function(actor) {
        //Get the sprite for that actor.
        var sprite = data.sprite.get(actor.sprite);

        //Probably unneeded check. But set the sprite's x and y to the actor's x and y.
        if (sprite) {
            sprite.x = actor.x;
            sprite.y = actor.y;
        };
    });

    //When an item's sprite changes.
    data.topia.item.on("sprite", function(item) {
        //Get the sprite for that item. 
        var sprite = data.sprite.get(item.sprite);

        //Set the sprite's x and y to the actor's x and y.
        if (sprite) {
            sprite.x = item.x;
            sprite.y = item.y;
        };
    });

    //When an actor's x and y changes.
    data.topia.actor.on("x", "y", function(actor) {
        //Get the sprite for the actor.
        var sprite = data.sprite.get(actor.sprite);

        //Set the sprite's x and y to the actor's x and y;
        sprite.x = actor.x;
        sprite.y = actor.y;
    });

    //When an item's x and y changes.
    data.topia.item.on("x", "y", function(item) {
        //Get the sprite for the actor.
        var sprite = data.sprite.get(item.sprite);

        //Set the sprite's x and y to the actor's x and y;
        sprite.x = item.x;
        sprite.y = item.y;
    });
});