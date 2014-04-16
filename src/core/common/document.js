define({

    getSize: function () {
        var width = window.innerWidth;
        var height = window.innerHeight;

        return [width, height];
    }
});


//exports.allowFullScreen = true;

// Returns the width/height of the current document as an array [width, height]
/*exports.getSize = function () {
    var width = $(document).width();
    var height = $(document).height();

    return [width, height];
};*/

/*exports = {

    // Register a callback event for the resize event for the document/window
    onResize: function (callback) {
        var self = this;

        if (!this.has("resize")) {
            $(window).resize(function (e) {
                self.event("resize", e);
            });
        }

        this.on("resize", callback);
    },

    // Register a callback event for when the document is put into fullscreen mode
    onFullScreen: function (callback) {
        if (this.allowFullScreen) {
            var self = this;

            if (!this.has("fullscreen")) {

                var event = function (e) {
                    self.event("fullscreen", e);
                };

                document.addEventListener("fullscreenchange", event, false);
                document.addEventListener("mozfullscreenchange", event, false);
                document.addEventListener("webkitfullscreenchange", event, false);
            }

            this.on("fullscreen", callback);
        }
    },

    has: function (event) {
        if (this.events) {
            return this.events.has(event);
        }

        return false;
    },

    event: function () {
        if (this.events) {
            this.events.publish.apply(this.events, arguments);
        }
    },

    on: function (event, callback) {
        if (!this.events) {
            this.events = new Topia.Dispatcher({ context: this });
        }

        return this.events.add(event, callback);
    }
};*/