//The drop action is used by an actor to drop an item. Ownership of the item will be cleared, and ideally the item will be at the actor's position.
define(["data"], function () {

    var actors = data("topia", "actor");
    var items = data("topia", "item");
    var actions = data("topia", "action");
     
    return {
        run: function (action) {
            if (action.name == "drop" && action.owner && action.target) {
                var actor = actors.get(action.owner);
                var item = items.get(action.target);
            if (item.owner != actor.id) {
               console.log("That actor doesn't own that item.");
               return;
             };
             console.log("Dropped" + " " + item.name);

             item.owner = null;
             item.x = actor.x;
             item.y = actor.y;

             items.save(item);
             };
         }
    };    
});