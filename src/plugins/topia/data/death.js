// Record of actor deaths
define(["data"], function (data) {

    var Death = function () {
        
        //The name of what died.
        this.name = "";

        //The type of actor that died.
        this.type = "";

        //The time of death.
        this.time = null;
    };

    return data.define("topia", "death", Death);
});