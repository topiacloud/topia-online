//This system handles assigning components to created items.
define(["data"], function (data) {

    //When an item is added to the table.
    data.topia.item.on("add", function (item) {
        //If it's a rock.
        if (item.name == "a rock") {
            //Add it's component(s) and assign the owner.
            data.topia.component.add({ name: "rock", health: 100, size: 1, material: 3, owner: item.id, vital: true });
        };

        //If it's a branch.
        if (item.name == "a branch") {
            //Add it's component(s) and assign the owner.
            data.topia.component.add({ name: "branch", health: 100, size: 1, material: 2, owner: item.id, vital: true });
        };
    });
});