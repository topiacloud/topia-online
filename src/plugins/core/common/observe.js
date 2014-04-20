define(function() {

    return function (item, onChange) {

        var map = {};

        for (var field in item) {

            if (_.isFunction(field)) {
                continue;
            }

            map[field] = item[field];

            Object.defineProperty(item, field, {
                get: function () {
                    return map[field];
                },
                set: function (value) {
                    map[field] = value;
                    onChange();
                }
            });
        }
    };
});