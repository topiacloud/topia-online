// A behavior data type
define(["data"], function (data) {

    var Behavior = function () {

        // the data type of the thing being controlled by the behavior, for instance, "rectangle", "sprite"
        this.type = "";

        // the id of the thing being controlled by the behavior
        this.target = null;

        // the kind of behavior to be used, for instance "pathfind", "particle" or whatever
        this.kind = "";

        // the id of the behavior's state
        this.data = null;
    };
    return data.define("behavior", Behavior);
});