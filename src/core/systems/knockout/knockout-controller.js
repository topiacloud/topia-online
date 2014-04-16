// Knockout Controller
// Creates, manages, and binds UI to Knockout templates.
define([

    "../../common/data",
    "../../common/cache",
    "../../common/string",
    "knockout",

    // Knockout handlers
    "content/knockout/bindingHandlers/draggable",
    "content/knockout/bindingHandlers/position",
    "content/knockout/bindingHandlers/hoverable"

], function (data, cache, string, ko) {

    var uis = data("ui");

    var save = function(key, value) {
        return function () {
            data(key).save(value);
        };
    };

    var bindTemplate = function (key, ui) {
        var instance = $($("#" + key).html()).attr("id", "topia-ui-" + ui.id);

        $("body").append(instance);

        ui.save = save;

        ko.applyBindings(ui, instance[0]);
    };

    uis.on("save", function (ui) {
        var key = string.replace(ui.template, "/", "_").replace(ui.template).split(".")[0];
        var exists = $("#" + key).length > 0;

        if (!exists) {
            $.get(ui.template, function (doc, status, response) {
                var html = $(response.responseText).attr("id", key);
                $("body").append(html);

                bindTemplate(key, ui);
            });
        } else {
            bindTemplate(key, ui);
        }
    });
});