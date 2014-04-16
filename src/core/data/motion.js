// Represents a transition from one position to another
define(["../common/data"], function (data) {

    var Motion = function () {

        // Type of data that is performing the tween, must have 'x' and 'y' properties
        this.type = "";

        // Id of the type of data
        this.target = 0;

        // The time that the tween began
        this.startTime = 0;

        // The time that the tween will end
        this.endTime = 0;

        // The starting x position of the motion
        this.startX = 0;

        // The starting y position of the motion
        this.startY = 0;

        // The end x position of the motion
        this.endX = 0;

        // The end y position of the motion
        this.endY = 0;
    };


    var time = new Date().getTime();

    var exampleMotion = {
        type: "rectangle",
        target: 5,
        startTime: time,
        endTime: time + 5000,
        startX: 100,
        startY: 100,
        endX: 200,
        endY: 200
    };

    var exampleMotion2 = {
        type: "rectangle",
        target: 5,
        speed: 4,
        endX: 250,
        endY: 250
    };

    var exampleMotion3 = {
        type: "rectangle",
        target: 5,
        time: 4000,
        endX: 250,
        endY: 250
    };

    var exampleMotionSystem = function() {

        // Every frame
        data("frame").on("save", function(frame) {

            // Iterate over each motion
            data("motion").each(function(motion) {

                // Get the 'target' of the motion (could be a rectangle, camera, sprite, etc)
                var target = data(motion.type).get(motion.target);

                // Adjust the target's position accordingly
                target.x += frame.delta * (motion.endX - motion.startX);
                target.y += frame.delta * (motion.endY - motion.startY);
                target.save();

                // Check if the motion is finished, and remove it
                // data("motion").remove(motion);
            });
        });
    };


    return data.define("motion", Motion);
});