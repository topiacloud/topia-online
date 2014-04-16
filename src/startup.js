// Initial startup settings
define(["config"], function (config) {

    // Add/remove data from the default
    config.data.push("game/data/monument");
    config.data.push("game/data/terrain");
    config.data.push("game/data/actor");

    // Add/remove systems from the default
    config.systems.push("game/systems/terrain");
    config.systems.push("game/systems/world");
    config.systems.push("game/systems/death");

    // This is the function that gets run when the app starts
    config.startup = function(data) {

        // Create the main canvas
        var canvas = data("canvas").save({ maximized: true });

        // Create a camera
        data("camera").save({ canvas: canvas.id, x: 0, y: 0  });

        // Create the main game world
        data("world").save({});

        // Create a test window
        data("window").save({
            title: "World Editor",
            template: "content/templates/documentation/documentation.html",
            position: {
                my: "right-25 top+25",
                at: "right top",
                of: "#canvas1",
                collision: "fit"
            }
        });
    };

    return config;
});