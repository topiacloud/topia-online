//A trait is a characteristic of an actor or item.
define(["data"], function (data) {
    
    var Trait = function () {
        
        //The name of the trait.
        this.name = "";

        //The owner of the trait. This can be an actor or item.
        this.owner = 0;

        //The value of the trait. This will be true or false.
        this.value = false;
    };

    return data.define("topia", "trait", Trait);
});