//This system handles the gradual decay of items (not actors) in the game world.
define(["data"], function (data) {
    var items = data("topia", "item");

    setInterval(function () {
        items.each(function (item) {
            var material = data("topia", "material").get(item.material);
            var rot = Math.floor((Math.random()*10)+1);
            if (rot > material.resistance) {
                item.health -= 1;
            }
            items.save(item);
        });
    }, 60000);
});