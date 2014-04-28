﻿// Enables moving the camera using WASD key presses.
define(["data", "../common/keyboard"], function (data, keyboard) {

    var speed = 0.5;
    var xVelocity = 0;
    var yVelocity = 0;

    var option = data("option").add({ name: "wasd_camera", value: true });

    data.keypress.on(["state", "add", "button"], function (key) {

        switch (key.state) {

            case "down":
                switch (key.button) {
                    case keyboard.W:
                        yVelocity = 0 - speed;
                        break;
                    case keyboard.A:
                        xVelocity = 0 - speed;
                        break;
                    case keyboard.S:
                        yVelocity = speed;
                        break;
                    case keyboard.D:
                        xVelocity = speed;
                        break;
                }
                break;

            case "up":
                switch (key.button) {
                    case keyboard.W:
                        yVelocity = 0;
                        break;
                    case keyboard.A:
                        xVelocity = 0;
                        break;
                    case keyboard.S:
                        yVelocity = 0;
                        break;
                    case keyboard.D:
                        xVelocity = 0;
                        break;
                }
                break;
        }
    });

    // Todo:  Use motion instead
    data.frame.on("time", function(frame) {
        if (!option.value) {
            return;
        }

        if (xVelocity != 0 || yVelocity != 0) {
            var camera = data.camera.first();

            if (camera) {
                camera.x += xVelocity * frame.delta;
                camera.y += yVelocity * frame.delta;
            }
        }
    });
});