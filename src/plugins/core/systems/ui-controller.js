﻿// Knockout Controller
// Creates, manages, and binds UI to Knockout templates.
define([

    "data",
    "../common/cache",
    "../common/string",
    "../lib/knockout/knockout-3.1.0",

    // Knockout handlers
    "../lib/knockout/bindingHandlers/data",
    "../lib/knockout/bindingHandlers/draggable",
    "../lib/knockout/bindingHandlers/position",
    "../lib/knockout/bindingHandlers/hoverable"

], function (data, cache, string, ko) {

    var save = function(key, value) {
        return function () {
            data(key).save(value);
        };
    };

    var bindTemplate = function (key, ui) {
        var instance = $($("#" + key).html()).attr("id", "topia-ui-" + ui.id);

        $("body").append(instance);

        var model = {};

        for (var field in ui) {
            model[field] = ui[field];
        }

        model.save = save;

        ko.applyBindings(model, instance[0]);
    };

    data.ui.on("add", function (ui) {
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