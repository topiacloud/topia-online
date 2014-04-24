// A mapping to an HTML template for user interface components
define(["data"], function (data) {

    var UI = function () {

        // Todo:  Rename this to 'url'.  URL of the .html template for this component.
        this.template = "";

        // The id of the 'source' of data that this ui represents
        this.source = 0;
    };

    return data.define("ui", UI);
});