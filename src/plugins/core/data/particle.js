// The particle system, will create and emit objects of type and target
define(["data"], function (data) {
    
    var Particle = function () {

        // Type of data that is being emitted
        this.type = "";

        // Id of the type of data table to be cloned (?)
        this.target = null;


    };

    return data.define("particle", Particle);
});