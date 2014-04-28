//Bodyparts are used for actors. A bodypart can be damaged, destroyed, and affected by things.
define(["data"], function () {
    
    var Bodypart = function () {
        
        //The name of the bodypart.
        this.name = "";

        //The type of bodypart this is. Right now, types are grasp (used to manipulate objects/equip items), propulsion (used to move around), sensory (used to receive information), core (no use per se, but important).
        this.type = "";

        //The health of the bodypart. Right now this is just 100. Later we'll see about more detailed damage.
        this.health = 100;

        //The material of the bodypart. This is what the bodypart is made of, and references the material table.
        this.material = 0;

        //This flag determines if the bodypart is vital for the actor to be alive. A human typically cannot survive without a head or a torso, etc.
        this.isVital = false;

        //The owner of the bodypart. This will reference the actor table.
        this.owner = null;
    };


    return data.define("topia", "bodypart", Bodypart);
});