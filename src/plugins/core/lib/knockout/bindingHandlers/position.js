define(["../knockout-3.1.0"], function (ko) {

    var bind = function(element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());

        var position = {};

        if (value) {
                
            if (_.isArray(value)) {
                $(element).css({ left: value[0] + 'px', top: value[1] + 'px' });
                return position;
            }

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

            if (value.collision) {
                position.collision = value.collision;
            }

            $(window).resize(function () {
                $(element).position(position);
            });

            setTimeout(function () {
                $(element).position(position);
            });
        }

        return position;
    };

    ko.bindingHandlers.position = {

        init: function(element, valueAccessor) {
            bind(element, valueAccessor);
        },

        update: function (element, valueAccessor, all, model) {
            bind(element, valueAccessor);
        }
    };
});