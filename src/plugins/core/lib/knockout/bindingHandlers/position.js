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
                    var position = {};

                    if (value.my) {
                        position.my = value.my;
                    }

                    if (value.at) {
                        position.at = value.at;
                    }

                    if (value.of) {
                        position.of = value.of;
                    } else {
                        position.of = $(window);
                    }

                    $(element).position(position);
                });
            }
        }
    };
});