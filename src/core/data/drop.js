// Represents an object which has been drag/dropped onto the document.
define(["../common/data"], function (data) {

    var Drop = function () {

        // The x offset (in pixels) of the drop relative to the document.
        this.x = 0;

        // The y offset (in pixels) of the drop relative to the document.
        this.y = 0;
    };

    return data.define("drop", Drop);
});