//The take action is used when an actor becomes the owner of an object.
define(["data"], function () {

    var actors = data("topia", "actor");
    var items = data("topia", "item");
    
    return {
        run: function (action) {
            if (action.owner && action.target) {

            var actor = actors.get(action.owner);
            var item = items.get(action.target);
            console.log("Actor" + " " + actor.id + " " + "picked up" + " " + item.name);

            item.owner = actor.id;
            items.save(item);
            };
        }
    };    
});