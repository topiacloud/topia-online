define(["data"], function (data) {

    var Person = function () {

        this.name = "bob";

        this.age = 21;

        this.health = 10;
    };

    return data.define("person", Person);
});