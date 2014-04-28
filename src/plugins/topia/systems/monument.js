//This system handles assigning properties to monuments.
define(["data"], function (data ){
    
    data.topia.actor.on("add", function (actor) {
        if (actor.type == "monument") {
            data.topia.monument.add({ x: actor.x, y: actor.y, radius: 4096, height: 8192, width: 8192, owner: actor.id, type: "plains" });
        };
    });
});