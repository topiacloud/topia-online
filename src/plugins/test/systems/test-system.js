// Shows the current FPS in the top left corner.
define(["data"], function (data) {

    console.log("Test system initialized.");

    data.person.on("add", function(person) {
        console.log("Person data added: " + person.name);
        person.name = "Fred";
        person.age = 40;

        data.animal.add({ name: "fido", type: "dog" });
    });

    data.person.on("save", function(person) {
        console.log("Person data saved: " + person.name);
    });

    data.person.on("name", function(person) {
        console.log("Name changed: " + person.name);

        var animal = data.animal.first();
        animal.type = "cat";
    });

    data.person.on("age", function(person) {
        console.log("Age changed: " + person.age);
    });

    data.person.on("age", function(person) {
        console.log("Age changed (callback2): " + person.age);
    });

    data.person.on(["age", "name"], function(person) {
        console.log("Name/Age changed: " + person.name + " - " + person.age);

        person.health = 0;
    });

    data.person.on("health", function(person) {
        console.log("Health changed: " + person.health);

        data.person.remove(person);
    });

    data.person.on("remove", function(person) {
        console.log("Removed: " + person.name);
    });

    data.person.on("invalid_property", function(test) {
        throw "This should never get called";
    });

    data.animal.on("add", function(animal) {
        console.log("Animal added: " + animal.name);
    });

    data.animal.on("type", function(animal) {
        console.log("Animal has become a: " + animal.type);
    });
});