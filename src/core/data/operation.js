// Universal data type to represent an arbitrary process
define(["../common/data"], function (data) {

    var Operation = function () {

        // Classification for the operation
        this.type = "";
    };

    return data.define("operation", Operation);
});