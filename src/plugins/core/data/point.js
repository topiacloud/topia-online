// A 2d point data type
define(["data"], function (data) {

    var Point = function () {

        // The point's x position
        this.x = null;

        // The point's y position
        this.y = null;
    };

    return data.define("point", Point);
});