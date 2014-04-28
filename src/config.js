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

        require(["data", "startup"], function(data, startup) {
            window.data = data;
            window.app = { data: data };

            var plugins = [];

            _.each(startup.plugins, function(plugin) {
                plugins.push("plugins/" + plugin + "/plugin");
            });

            var loaded = 0;
            var systemStartups = [];
            var dataTypes = [];
            var systems = [];

            var finishedLoadingPlugin = function() {
                loaded += 1;

                if (loaded == plugins.length) {
                    require(dataTypes, function() {
                        require(systems, function() {

                            _.each(systemStartups, function(start) {
                                start(data);
                            });

                            data("world").add({ startTime: new Date().getTime() });

                            if (startup.start) {
                                startup.start(data);
                            }
                        });
                    });
                }
            };

            _.each(plugins, function(plugin) {
                var pluginName = plugin.split("/")[1];

                require([plugin], function(definition) {

                    if (definition.start) {
                        systemStartups.push(definition.start);
                    }

                    if (definition.data) {
                        _.each(definition.data, function(item) {
                            dataTypes.push("plugins/" + pluginName + "/data/" + item);
                        });
                    }

                    if (definition.systems) {
                        _.each(definition.systems, function(system) {
                            systems.push("plugins/" + pluginName + "/systems/" + system);
                        });
                    }

                    finishedLoadingPlugin();
                });
            });
        });
    }
});