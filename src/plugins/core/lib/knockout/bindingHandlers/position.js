define(["../knockout-3.1.0"], function (ko) {
    ko.bindingHandlers.position = {
        update: function (element, valueAccessor, all, model) {
            var value = ko.utils.unwrapObservable(valueAccessor());

            if (value) {

                if (_.isArray(value)) {
                    $(element).css({ left: value[0] + 'px', top: value[1] + 'px' });
                    return;
                }

                $(window).resize(function () {
                    $(element).position(value);
                });

                setTimeout(function () {
                    $(element).position(value);
                });
            }
        }
    };
});