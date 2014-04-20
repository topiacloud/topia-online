// A mapping to an HTML template for user interface components
define(["data"], function (data) {

    var UI = function () {

        // Todo:  Rename this to 'url'.  URL of the .html template for this component.
        this.template = "";
    };

    return data.define("ui", UI);
});