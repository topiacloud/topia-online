// Top-level universal game entity
define(["../common/data"], function (data) {

    var Entity = function () {

        // Friendly identifier for the entity
        this.name = "";
    };

    return data.define("entity", Entity);
});