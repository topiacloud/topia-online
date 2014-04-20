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

        //The durability of an item. When this reaches 0, typically the item is destroyed. Default to 100?
        this.health = 100;

        //The sprite used by the item..
        this.sprite = 0;

        //The material an item is made of. This is an integer associated with the material table. 
        this.material = 0;

        //The owner of an item. This will reference the actor to which the item belongs to.
        this.owner = null;
    };

    return data.define("topia", "item", Item);
});