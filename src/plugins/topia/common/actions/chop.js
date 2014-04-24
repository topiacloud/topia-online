//The chop action is performed when an actor chops at a tree, door, etc.
define(["data"], function () {
    
    var actors = data("topia", "actor");
    var items = data("topia", "item");
    var materials = data("topia", "material");

    return {
        run: function (action) {
            if (action.owner && action.target) {
                var actor = actors.get(action.owner);
                var target = actors.get(action.target);
                var item = items.get(item.owner == actor.id && item.type == "axe" && item.isEquipped == true);
                var itemMaterial = materials.get(item.material);
                var targetMaterial = materials.get(target.material);
                var damage = Math.floor((Math.random()*10)+1);

                console.log(actor + " is chopping" + " " + target);
                if (itemMaterial.strength < targetMaterial.resistance) {
                    var itemDamage = Math.floor((Math.random()*10)+1);

                    if (itemDamage > item.resistance) {
                        item.health -= (damage/2);
                    }

                    else {
                        item.health -= 1;
                    };
                    target.health -= 1;
                }

                else {
                    var itemDamage = Math.floor((Math.random()*10)+1);
                    var soakRoll = Math.floor((Math.random()*10)+1);

                    item.health -= 1;

                    if (soakRoll > target.resistance) {
                        target.health -= itemDamage;
                    }
                    else {
                        target.health -= (itemDamage/2);
                    }
                };

                actors.save(target);
                items.save(item);
            };
        }
    };
});