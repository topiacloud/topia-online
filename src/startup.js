var mode = "topia"; // "test", "login", "topia"

if( window.location.href.indexOf("sandbox.html") >= 0) {
    mode = "topia";
}

switch( mode ) {

    case "login":
        define({

            plugins: [
                "core",
                "login"
            ]
        });

        break;

    case "test":
        define({
            plugins: [
                "test"
            ]
        });

        break;

    case "topia":

        define({

            plugins: [
                "core",
                "hotkeys",
                "debug",
                "topia"
            ],

            start: function(data) {

                var tree = data.sprite.add({ x: -300, y: 200, image: "content/assets/game/environment/tree/idle.png" });

                data.topia.actor.add({ x: -300, y: 200, name: "Tree", sprite: tree.id });

                data.touch.on(["add", "state"], function(touch) {
                    if (touch.type == "sprite" && touch.state == "click" && touch.target == tree.id) {
                        data.animation.add({ path: "content/assets/game/environment/tree/hit.json", sprite: touch.target, duration: 1200, repeat: false });
                    }
                });

                data.animation.add({ path: "content/assets/game/environment/tree/hit.json", sprite: tree.id, duration: 1200, repeat: true });

                var position = data.position.add({
                    my: "right-25 top+25",
                    at: "right top",
                    collision: "fit"
                });

                data.panel.add({
                    title: "World Editor",
                    template: "content/templates/documentation/documentation.html",
                    position: position.id
                });

                /*var hotbarPosition = data.position.add({
                    my: "left+25 bottom-25",
                    at: "left bottom",
                    of: "#canvas1",
                    collision: "fit"
                });

                data.hotkeys.bar.add({
                    buttons: 5,
                    orientation: "horizontal",
                    label: "numeric",
                    position: hotbarPosition
                });*/
            }
        });

        break;
}