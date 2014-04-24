define({
    
    name: "Test Plugin",

    systems: [
        "test-system"
    ],

    data: [
        "person",
        "animal"
    ],

    start: function(data) {
        console.log("Adding person data...");
        data.person.add({ name: "tom", age: 25 });
    }
});