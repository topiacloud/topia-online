// This will destroy an item which reaches 0 health.
define(["data"], function (data) {
    //When the health of a component changes.
    data.topia.component.on("health", function (component) {
        //If the component's health is 0 or below.
        if (component.health <= 0) {
            //Give a message that the component has been destroyed.
            console.log(component.name + " has been destroyed.");

            //If the component is a part of an item.
            if (component.owner) {
                //Get the item the component belongs to.
                var item = data.topia.item.get(component.owner);
                //Give a message that the item's component has been destroyed.
                console.log("A" + " " + item.name + "'s" + component.name + " has been destroyed!");

                //If the component was vital (required for the item to function properly).
                if (component.isVital == true) {
                    //If it has a sprite (not in the inventory?).
                    if (item.sprite) {
                        //Get the sprite of the item.
                        var sprite = data.sprite.get(item.sprite);

                        //Remove the sprite from the table.
                        data.sprite.remove(sprite);
                        //Give a message that the item has been destroyed.
                        console.log(item.name + " has been destroyed.");
                        //Remove the item from the table.
                        data.topia.item.remove(item);
                    };
                };
            };
        };
    });
});