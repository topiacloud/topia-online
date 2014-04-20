// This will destroy an item which reaches 0 health.
define(["data"], function (data) {
    
    var items = data("topia", "item");
    var sprites = data("sprite");

    items.on("save", function (item) {
        if (item.health <= 0) {
            var sprite = sprites.get(item.sprite);
            console.log(item.name + " has been destroyed.");
            sprites.remove(sprite);
            items.remove(item);
        };
    });
});