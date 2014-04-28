//The action system handles accessing an action and performing it's logic.
define(["data", "require"], function (data, require) {

    //When an action is recorded in the table.
    data.topia.action.on("add", function (action) {
        //If the action has a name (It always should).
        if (action.name) {
            //Set a variable to the action's name.
            var actionName = action.name;

            require(["../common/actions/" + actionName], function (lookup) {
                lookup.run(action);
            });
        };
    });    
});