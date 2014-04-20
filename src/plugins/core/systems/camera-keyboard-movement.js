// Enables moving the camera using WASD key presses.
define(["data", "../common/keyboard"], function (data, keyboard) {

    var keypresses = data("keypress");
    var cameras = data("camera");
    var frames = data("frame");

    var speed = 0.5;
    var xVelocity = 0;
    var yVelocity = 0;

    var option = data("option").save({ name: "wasd_camera", value: true });

    keypresses.on("save", function (key) {
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
    frames.on("save", function(frame) {
        if (!option.value) {
            return;
        }

        if (xVelocity != 0 || yVelocity != 0) {
            var camera = cameras.first();

            if (camera) {
                camera.x += parseInt(xVelocity * frame.delta);
                camera.y += parseInt(yVelocity * frame.delta);
            }
        }
    });
});