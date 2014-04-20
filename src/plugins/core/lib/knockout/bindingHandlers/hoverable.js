define(["../knockout-3.1.0"], function (ko) {
    ko.bindingHandlers.hoverable = {
        init: function (element, valueAccessor, all, model) {
            var settings = ko.utils.unwrapObservable(valueAccessor());

            $(element).mouseover(function () {
                $(element).addClass("hover");

                if (settings.over) {
                    settings.over.call(model, element);
                }

                if (settings.onOver) {
                    settings.onOver.call(model, element);
                }
            });

            $(element).mouseout(function () {
                $(element).removeClass("hover");

                if (settings.out) {
                    settings.out.call(model, element);
                }

                if (settings.onOut) {
                    settings.onOut.call(model, element);
                }
            });
        }
    };
});