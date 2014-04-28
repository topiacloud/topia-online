define(function() {

    var Observer = function(proxy, host) {
        this.changes = ["add"];
        this.properties = {};
        this.proxy = proxy;
        this.host = host;
        this.interceptors = null;
    };

    Observer.prototype = {

        dispose: function() {
            this.changes = null;
            this.intercepted = false;
            this.interceptors = null;
            this.properties = null;
            this.proxy = null;
            this.host = null;
        },

        intercept: function(interceptor) {

            this.intercepted = true;

            if (!this.interceptors) {
                this.interceptors = [];
            }

            // Start observing all fields
            for (var field in this.proxy) {
                this.observe(field);
            }

            this.interceptors.push(interceptor);
        },

        clearChangeset: function() {
            this.changes = [];
        },

        // Begins observing the field (by name)
        observe: function(field) {

            if (this.properties.hasOwnProperty(field)) {
                return;
            }

            var self = this;

            this.properties[field] = this.proxy[field];

            Object.defineProperty(this.proxy, field, {

                get: function() {
                    return self.properties[field];
                },

                set: function(newValue) {

                    var oldValue = self.properties[field];

                    // Update underlying field
                    self.properties[field] = newValue;

                    // Notify parent of changed field
                    self.host.changed(self, self.changes.length, field, oldValue, newValue);

                    if (self.intercepted) {
                        _.each(self.interceptors, function(interceptor) {
                            interceptor[field] = newValue;
                        });
                    }

                    if (self.changes.indexOf(field) < 0) {
                        self.changes.push(field);
                    }
                },

                enumerable: true
            });
        }
    };

    return Observer;
});