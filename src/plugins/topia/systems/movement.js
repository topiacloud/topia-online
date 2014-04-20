//The movement system takes move actions and executes them.
define(["data"], function (data) {

    var motions = data("motion");
    var actors = data("topia", "actor");
    var actions = data("topia", "action");
    var items = data("topia", "item");

    actions.on("save", function (action) {
        if (action.type == "actor") {
            var actor = actors.get(action.owner);

            if (action.name == "movement" && action.owner && action.targetX && action.targetY) {
                motions.save({ type: "actor", target: actor.id, endX: action.targetX, endY: action.targetY, time: 5000 });
                actors.save(actor);
            };
        }

        else if (action.type == "item") {
            var item = items.get(action.owner);

            if (action.name == "movement" && action.owner && action.targetX && action.targetY) {
                motions.save({ type: "item", target: item.id, endX: action.targetX, endY: action.targetY, time: 5000});
                items.save(item);
            }
        };
    });
});