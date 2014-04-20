//The action system handles accessing an action and performing it's logic.
define(["data", "require"], function (data, require) {
    
    var actions = data("topia", "action");
    
    actions.on("save", function (action) {
        if (action.name) {
            var actionName = action.name;

            require(["../common/actions/" + actionName], function (lookup) {
                lookup.run(action);
            });
        };
    });    
});