define(["data", "../knockout-3.1.0"], function(data, ko) {

    var inject = function(item) {

        if (item == null) {
            return null;
        }

        if (_.isArray(item)) {
            var array = ko.observableArray([]);

            _.each(item, function(eachItem) {
                array.push(inject(eachItem));
            });

            return array;
        }

        var proxyData = {};

        for (var each in item) {
            if (_.isFunction(item[each])) {
                continue;
            }

            var observable = ko.observable(item[each]);

            Object.defineProperty(proxyData, each, {
                configurable: true,
                enumerable: true,
                get: observable,
                set: observable
            });
        }

        data.intercept(item, proxyData);

        return proxyData;
    };

    var getBindingFunction = function(element, valueAccessor, allBindings, viewModel, bindingContext, isUpdate, item) {

        if (_.isArray(item())) {
            if (isUpdate) {
                return ko.bindingHandlers.foreach.update(element, function() { return item; }, allBindings, viewModel, bindingContext);
            } else {
                return ko.bindingHandlers.foreach.init(element, function() { return item; }, allBindings, viewModel, bindingContext);
            }
        }
        
        if (isUpdate) {
            return null;
        }

        return ko.bindingHandlers.with.init(element, function() { return item; }, allBindings, viewModel, bindingContext);
    };

    var binding = function(element, valueAccessor, allBindings, viewModel, bindingContext, isUpdate) {

        var options = ko.utils.unwrapObservable(valueAccessor());

        if (_.isNumber(options)) {
            var item = inject(data.get(options));
            return getBindingFunction(element, valueAccessor, allBindings, viewModel, bindingContext, isUpdate, ko.observable(item));
        }

        var plugin = options.plugin || "core";
        var type = options.type;

        if (options.get) {

            // Todo:  Begin listening to 'add' / 'remove' events based on this criteria
            var result = inject(data[plugin][type].get(options.get));

            return getBindingFunction(element, valueAccessor, allBindings, viewModel, bindingContext, isUpdate, result);
        }
    };

    ko.bindingHandlers.data = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            return binding(element, valueAccessor, allBindings, viewModel, bindingContext, false);
        },

        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            return binding(element, valueAccessor, allBindings, viewModel, bindingContext, true);
        }
    };
});