//This system is responsible for assigning a sprite to a newly created actor or item.
define(["data"], function (data) {
    
    //When an actor is added to the table.
    data.topia.actor.on("add", function (actor) {
        //If it's a tree.
        if (actor.type == "tree") {
            //Create a new sprite for the tree.
            var treeSprite = data.sprite.add({ image: "content/assets/game/environment/tree.png" });
            //Set the actor's sprite to the sprite.id.
            actor.sprite = treeSprite.id;
        };

        if (actor.type == "iron node") {
            //Create a new sprite for the node. Placeholder icon for now.
            var nodeSprite = data.sprite.add({ image: "plugins/topia/content/images/icons/anvil.png"});
            //Set the actor's sprite to the sprite.id.
            actor.sprite = nodeSprite.id;
        };
    });

    //When an item is added to the table.
    data.topia.item.on("add", function (item) {
        //If the item is a rock.
        if (item.name == "a rock") {
            //Create a new sprite for the rock.
            var rockSprite = data.sprite.add({ image: "content/assets/game/environment/stone.png"});
            //Set the item's sprite to the sprite.id.
            item.sprite = rockSprite.id;
        };

        //If the item is a branch.
        if (item.name == "a branch") {
            //Create a new sprite for the branch.
            var branchSprite = data.sprite.add({ image: "content/assets/game/environment/branch.png"});
            //Set the item's sprite to the sprite.id.
            item.sprite = branchSprite.id;
        };
    });
});