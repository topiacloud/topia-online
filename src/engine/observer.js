define(function() {

    var Observer = function(proxy, host) {
        this.changes = ["add"];
        this.properties = {};
        this.proxy = proxy;
        this.host = host;
    };

    Observer.prototype = {

        dispose: function() {
            this.changes = [];
            this.properties = null;
            this.proxy = null;
            this.host = null;
        },

        clearChangeset: function() {
            this.changes = [];
        },

        // Begins observing the field (by name)
        observe: function(field) {

            var self = this;
            var value = this.proxy[field];

            Object.defineProperty(this.proxy, field, {

                get: function() {
                    return self.properties[field];
                },

                set: function(newValue) {
                    if (newValue !== self.properties[field]) {
                        self.properties[field] = newValue;

                        if (self.changes.length === 0) {
                            self.host.changed(self);
                        }

                        self.changes.push(field);
                    }
                },

                enumerable: true
            });

            this.properties[field] = value;
        }
    };

    return Observer;
});