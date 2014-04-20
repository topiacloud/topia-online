require.config({

    // 3rd party Javascript dependencies
    deps: [
        "lib/jquery/jquery-2.1.0.min.js",
        "lib/jquery/jquery-ui-1.10.4.custom.min.js",
        "lib/underscore.js"
    ],

    // Aliases for Javascript files
    paths: {
        data: "engine/data",
        preloadjs: "lib/preloadjs/preloadjs-0.4.1.min",
        jquery: "lib/jquery/jquery-2.1.0.min",
        jqueryui: "lib/jquery/jquery-ui-1.10.4.custom.min" 
    },

    // Javascript library dependencies
    shim: {
        preloadjs: { exports: "createjs" },
        jqueryui: { deps: ["jquery"] }
    },

    // Initialize the app
    callback: function () {
        require(["data", "plugins/core/common/cache", "startup"], function(data, cache) {

            // Create the main game world
            data("world").save({});

            window.data = data;

            window.app = {
                data: data,
                cache: cache
            };
        });
    }
});