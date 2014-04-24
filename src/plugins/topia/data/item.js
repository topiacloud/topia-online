//An item is an object in the game world that can typically be picked up and carried, or placed in a location.
define(["data"], function (data) {
    
    var Item = function () {
        
        //The x position of the item.
        this.x = 0;

        //The y position of the item.
        this.y = 0;

        //The name of the item.
        this.name = "";

        //The type of item this is. Examples might include sword, chair, stone, etc.
        this.type = "";

        //The sprite used by the item. <---This will most likely be replaced by the component system.
        this.sprite = 0;

        //The owner of an item. This will reference the actor to which the item belongs to.
        this.owner = null;

        //Determines if this item is equipped by it's owner, or is simply in the owner's inventory.
        this.isEquipped = false;
    };

    return data.define("topia", "item", Item);
});