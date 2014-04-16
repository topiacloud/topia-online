// See http://requirejs.org/docs/api.html#config for configuration details
require.config({

    // 3rd party Javascript dependencies
    deps: [
        "content/jquery/jquery-2.1.0.min.js",
        "content/jquery/jquery-ui-1.10.4.custom.min.js",
        "content/underscore/underscore-min.js",
        "content/bootstrap/js/bootstrap.min.js"
    ],

    // Aliases for Javascript files
    paths: {
        preloadjs: "content/preloadjs/preloadjs-0.4.1.min",
        knockout: "content/knockout/knockout-3.1.0",
        jquery: "content/jquery/jquery-2.1.0.min",
        jqueryui: "content/jquery/jquery-ui-1.10.4.custom.min"
    },

    // Javascript library dependencies
    shim: {
        preloadjs: { exports: "createjs" },
        jqueryui: { deps: ["jquery"] },
        knockout: { deps: ["jqueryui"] }
    },

    // Initialize the app
    callback: function () {
        require(["startup", "core/common/data", "core/common/app"], function(startup, data, app) {
            require(startup.data, function() {
                require(startup.systems, function() {
                    if (startup.startup) {
                        startup.startup(data);
                    }

                    window.app = app;
                });
            });
        });
    }
});