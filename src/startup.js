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
            ],

            start: function() {

                var radius = 512;

                var lamp = new illuminated.Lamp({
                    position: new illuminated.Vec2(radius / 2, radius / 2),
                    color: "rgba(255, 255, 255, 1)",
                    distance: radius / 2,
                    radius: 5,
                    samples: 10000,
                    diffuse: 1
                });

                var lighting = new illuminated.Lighting({
                    light: lamp
                });

                var canvas = document.createElement("canvas");
                canvas.width = radius;
                canvas.height = radius;

                $(canvas).appendTo("body");

                var context = canvas.getContext("2d");

                //context.fillStyle = "black";
                //context.fillRect(0, 0, radius, radius);

                lighting.compute(radius, radius);
                lighting.render(context);

                //$(canvas).css({ width: "512px", height: "512px" });
            }
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

                /*data.touch.on(["add", "state"], function(touch) {
                    if (touch.type == "sprite" && touch.state == "click" && touch.target == tree.id) {
                        data.animation.add({ path: "content/assets/game/environment/tree/hit.json", sprite: touch.target, duration: 1200, repeat: false });
                    }
                });

                data.animation.add({ path: "content/assets/game/environment/tree/hit.json", sprite: tree.id, duration: 1200, repeat: true });*/

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

                var hotbarPosition = data.position.add({
                    my: "left bottom",
                    at: "left+10 bottom-10",
                    collision: "fit"
                });

                data.hotkeys.bar.add({
                    buttons: 9,
                    orientation: "horizontal",
                    label: "numeric",
                    position: hotbarPosition.id
                });

                var button = data.hotkeys.button.first();
                button.icon = "plugins/topia/content/images/icons/at-sea.png";

                window.test = function() {
                    var start = new Date();

                    // Do stuff

                    return new Date() - start;
                };
            }
        });

        break;
}