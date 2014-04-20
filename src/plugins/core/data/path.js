// A 2d path data type
define(["data"], function (data) {

    var Path = function () {

        // the link this path is connected to
        this.step = null;

        // the next path step
        this.next = null;

        // the direction it should take (true = from a to b, false = from b to a)
        this.dir = null;
    };

    return data.define("path", Path);
});