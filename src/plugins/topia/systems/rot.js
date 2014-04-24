//This system handles the gradual decay of items (not actors) in the game world.
define(["data"], function (data) {
    var items = data("topia", "item");
    var components = data("topia", "components");

    setInterval(function () {
        components.each(function (component) {
            var material = data("topia", "material").get(component.material);
            var rot = Math.floor((Math.random()*10)+1);
            if (rot > material.resistance) {
                component.health -= 1;
            };

            items.save(item);
        });
    }, 60000);
});