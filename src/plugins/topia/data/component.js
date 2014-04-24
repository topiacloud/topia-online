//Components make up an item. Each component has a material composition, an owner (the item the component is a part of), and health.
define(["data"], function (data) {
    
    var Component = function () {
        
        //The name of the component.
        this.name = "";

        //The id of the item the component is a part of.
        this.owner = null;

        //The health of the component.
        this.health = 100;

        //The material the component is made of. This is a reference by id to the Material data type.
        this.material = 0;

        //The size of the component in Size Units (Whatever).
        this.size = 0;

        //The weight of the component. Based on the size and material of the component.
        this.weight = 0;
    };

    return data.define("topia", "component", Component);
});