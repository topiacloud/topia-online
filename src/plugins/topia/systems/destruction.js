// This will destroy an item which reaches 0 health.
define(["data"], function (data) {
    
    var items = data("topia", "item");
    var sprites = data("sprite");
    var components = data("topia", "component");

    components.on("save", function (component) {
        if (component.health <= 0) {
            console.log(component.name + " has been destroyed.");

            if (component.owner) {
                var item = items.get(component.owner);
                if (item.sprite) {
                    var sprite = sprites.get(item.sprite);
                    sprites.remove(sprite);
                    console.log(item.name + " has been destroyed.");
                    items.remove(item);
                };
            };
        };
    });
});