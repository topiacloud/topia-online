define(["data"], function (data) {

    var Animal = function () {

        this.name = "";

        this.type = "";
    };

    return data.define("animal", Animal);
});