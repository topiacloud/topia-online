define(["knockout"], function(ko) {
    ko.bindingHandlers.draggable = {
        init: function (element, data) {
            var settings = ko.utils.unwrapObservable(data());

            $(element).draggable(settings);
        }
    };
});