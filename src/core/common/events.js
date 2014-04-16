define(function () {

    var Dispatcher = function (init) {
        init = init || {};

        this.channels = {};
        this.context = init.context || this;
    };

    Dispatcher.prototype = {

        // Dispose of all channel subscribers
        dispose: function () {
            this.channels = {};
        },

        // Is a particular channel registered?
        has: function (channel) {
            return this.channels[channel] != null;
        },

        // Adds a callback to the given channel
        add: function (channel, callback) {

            var channels = this.channels;

            if (!channels[channel]) {
                channels[channel] = [];
            }

            channels[channel].push(callback);

            if (channel != "on") {
                this.publish("on", channel, channels[channel].length);
            }
        },

        on: function (channel, subscriber) {
            this.add(channel, subscriber);
        },

        // Clears a channel of all subscribers
        clear: function (channelName) {
            delete this.channels[channelName];
        },

        first: function (channelName, callback) {
            this.on("on", function (channel, subscribers) {
                if (subscribers == 1 && channel == channelName) {
                    callback.call();
                }
            });
        },

        // Publish a message to all subscribers of the given channel
        publish: function () {

            var result = null;
            var channel = this.channels[arguments[0]];
            var args = Array.prototype.slice.call(arguments, 1);

            //if (arguments[0] != "*" && this.channels.hasOwnProperty("*")) {
            //    this.publish.apply(this, ["*"].concat(args));
            //}

            if (channel) {
                for (var subscriber = 0; subscriber < channel.length; subscriber++) {
                    result = channel[subscriber].apply(this.context, args);
                }
            }

            return result;
        }
    };

    return {
        create: function(options) {
            return new Dispatcher(options);
        }
    };
});