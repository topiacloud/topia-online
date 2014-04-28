//This system handles the gradual decay of items (not actors) in the game world.
define(["data"], function (data) {
    //This is all useless.
    /*setInterval(function () {
        data.topia.component.each(function (component) {
            var material = data.topia.material.get(component.material);
            var rot = Math.floor((Math.random()*10)+1);

            if (rot > material.resistance) {
                component.health -= 1;
            };

            data.topia.item.add(item);
        });
    }, 60000);*/
});