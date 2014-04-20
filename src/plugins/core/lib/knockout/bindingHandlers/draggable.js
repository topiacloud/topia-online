define(["../knockout-3.1.0"], function(ko) {
    ko.bindingHandlers.draggable = {
        init: function (element, data) {
            var settings = ko.utils.unwrapObservable(data());

            $(element).draggable(settings);
        }
    };
});