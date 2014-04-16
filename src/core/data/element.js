// Represents a DOM element on the document
define(["../common/data"], function (data) {

    var Element = function () {

        // The tag name of the element
        this.tag = "";

        // The jQuery selector which can be used to access the element
        this.selector = "";
    };

    return data.define("element", Element);
});