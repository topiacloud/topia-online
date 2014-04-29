define({

    data: [
        "terrain"
    ],

    systems: [
        "terrain"
    ],

    start: function(data) {

        var option = data.option.first({ name: "wasd_camera" });

        if (option) {
            option.value = false;
        }

        // Create the canvas
        var canvas = data.canvas.add({ maximized: true });

        // Create the camera
        var camera = data.camera.add({ x: 0, y: 0 });

        // Create the scene that everything gets added to
        data.scene.add({ canvas: canvas.id, camera: camera.id, isDefault: true });

        // Create the terrain
        data.login.terrain.add({ x: 0, y: 0, width: 4096, height: 4096, image: "content/assets/game/environment/grass.png" });

        var position = data.position.add({
            my: "center center",
            at: "center center",
            collision: "fit"
        });

        data.panel.add({
            template: "plugins/login/content/templates/menu/menu.html",
            position: position.id
        });

        data.sound.add({ file: "content/assets/music/login.ogg" });

        data.sprite.add({ x: -500, y: -200, image: "content/assets/disorganized/flower1.png", index: 1 });
        data.sprite.add({ x: -600, y: -100, image: "content/assets/disorganized/campfire/1.png", index: 1 });
        data.sprite.add({ x: -550, y: -100, image: "content/assets/disorganized/branch.png", index: 1 });

        data.sprite.add({ x: -450, y: 150, image: "content/assets/disorganized/tree.png", index: 1 });
        data.sprite.add({ x: -425, y: 180, image: "content/assets/disorganized/leaves2.png", index: 1 });

        data.sprite.add({ x: 450, y: -100, image: "content/assets/disorganized/tree.png", index: 1 });
        data.sprite.add({ x: 410, y: 30, image: "content/assets/disorganized/branch.png", index: 1 });

        data.sprite.add({ x: 0, y: -230, image: "content/assets/disorganized/tree.png", index: 1 });

        data.sprite.add({ x: 550, y: 300, image: "content/assets/disorganized/tree2.png", index: 1 });

        data.sprite.add({ x: 50, y: 300, image: "content/assets/disorganized/flower2.png", index: 1 });
        data.sprite.add({ x: -500, y: 300, image: "content/assets/disorganized/flower3.png", index: 1 });
        data.sprite.add({ x: -600, y: 200, image: "content/assets/disorganized/flower4.png", index: 1 });
        data.sprite.add({ x: -700, y: -300, image: "content/assets/disorganized/flower5.png", index: 1 });
        data.sprite.add({ x: 600, y: -200, image: "content/assets/disorganized/flower6.png", index: 1 });

        function generateRandom(min, max) {
            return Math.random() * (max - min) + min;
        }

        var smokes = [];
        var maxSmoke = 25;
        var maxVelocity = 2;

        var minX = 0 - (window.innerWidth / 2);
        var minY = 0 - (window.innerHeight / 2);
        var maxX = (window.innerWidth / 2);
        var maxY = window.innerHeight;

        for (var smoke = 0; smoke < maxSmoke; ++smoke) {
            var x = parseInt(generateRandom(minX, maxX));
            var y = parseInt(generateRandom(minY, maxY));

            var xVelocity = generateRandom(-maxVelocity, maxVelocity);
            var yVelocity = generateRandom(-maxVelocity, maxVelocity);

            smokes.push(data.sprite.add({ x: x, y: y, image: "content/assets/disorganized/smoke.png", index: 2, xVelocity: xVelocity, yVelocity: yVelocity }));
        }

        $(window).resize(function() {
            minX = 0 - (window.innerWidth / 2);
            minY = 0 - (window.innerHeight / 2);
            maxX = window.innerWidth / 2;
            maxY = window.innerHeight;

            _.each(smokes, function(each) {
                each.x = parseInt(generateRandom(minX, maxX));
                each.y = parseInt(generateRandom(minX, maxX));
                each.xVelocity = generateRandom(-maxVelocity, maxVelocity);
                each.yVelocity = generateRandom(-maxVelocity, maxVelocity);
            });
        });

        data.frame.on("time", function() {
            _.each(smokes, function(each) {

                each.x += each.xVelocity;
                each.y += each.yVelocity;

                if (each.x >= maxX) {
                    each.xVelocity = -each.xVelocity;
                    each.x = maxX;
                }
                else if (each.x <= minX) {
                    each.xVelocity = -each.xVelocity;
                    each.x = minX;
                }

                if (each.y >= maxY) {
                    each.yVelocity = -each.yVelocity;
                    each.y = maxY;
                }
                else if (each.y <= minY) {
                    each.yVelocity = -each.yVelocity;
                    each.y = minY;
                }
            });
        });
    }
});