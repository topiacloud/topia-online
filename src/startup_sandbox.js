define(["data", "plugins/core/plugin", "plugins/debug/plugin", "plugins/topia/plugin"], function (data) {

    // Fast:
    // - Accessing object field like array
    // - Iterating linked list
    // - Iterating array
    //
    // Slow:
    // - Iterating object fields (for in)

    data("world").on("save", function() {

        var tree = data("sprite").save({ x: -300, y: 200, image: "content/assets/game/environment/tree/idle.png" });
        data("topia", "actor").save({ name: "Tree", sprite: tree.id });

        /*data("touch").on("save", function(touch) {
            if (touch.type == "sprite" && touch.state == "click" && touch.target == tree.id) {
                data("animation").save({ path: "content/assets/game/environment/tree/hit.json", sprite: touch.target, duration: 1200, repeat: false });
            }
        });*/

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
    });
});