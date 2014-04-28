//This system handles assigning bodyparts to actors in the game world.
define(["data"], function (data) {

    //When an actor is added to the table.
    data.topia.actor.on("add", function (actor) {
        //Find out if it's a tree.
        if (actor.type == "tree") {
            //Give it the bodyparts it needs.
            data.topia.bodypart.add({ name: "trunk", type: "core", health: 100, material: 2, isVital: true, owner: actor.id });
        };
    });
});