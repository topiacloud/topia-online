// A positioning strategy used for positioning panels or other visual elements using jQuery UI position
// See API documentation at:  http://api.jqueryui.com/position/
define(["data"], function (data) {

    var Position = function () {

        this.my = "";

        this.at = "";

        this.of = "";

        this.collision = "fit";
    };

    return data.define("position", Position);
});