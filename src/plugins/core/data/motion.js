/*  A motion is an tween/interpolation controller that will move depending on input parameters
  TEST CASES:
    var rect = data("rectangle").save({x: 10, y: 10, width: 10, height: 10, color: "red"});

    TEST CASE 1: endX, endY, speed
    data("motion").save({ type: "rectangle", target: rect.id, endX: 100, endY: 100, speed: 0.1 });

    TEST CASE 2: endX, endY, time
    data("motion").save({ type: "rectangle", target: rect.id, endX: 100, endY: 100, time: 2000 });

    TEST CASE 3: angle, speed, time
    data("motion").save({ type: "rectangle", target: rect.id, angle: Math.atan2(-1, 0), speed: 0.1, time: 1000 });

    TEST CASE 4: angle, speed (no time, will go on forever)
    data("motion").save({ type: "rectangle", target: rect.id, angle: Math.atan2(-1, 0), speed: 0.1 });

    TEST CASE 5: angleX, angleY, speed (no time, will go on forever)
    data("motion").save({ type: "rectangle", target: rect.id, angleX: -1, angleY: 0, speed: 0.1 });

    TEST CASE 6: angleX, angleY, speed, time
    data("motion").save({ type: "rectangle", target: rect.id, angleX: -1, angleY: 0, speed: 0.1, time: 1000 });

    TEST CASE 7: velocityX, velocityY (no time, will go on forever)
    data("motion").save({ type: "rectangle", target: rect.id, velocityX: -0.1, velocityY: 0 });

    TEST CASE 8: velocityX, velocityY, time
    data("motion").save({ type: "rectangle", target: rect.id, velocityX: -0.1, velocityY: 0, time: 1000 });
*/

define(["data"], function (data) {
    
    var Motion = function () {

        // Id of the type of data table
        this.target = null;

        // The amount of time duration (in milliseconds) of the motion
        this.time = null;

        // The time that the tween began (in milliseconds) *internal, does not need to be set*
        this.startTime = null;

        // The time that the tween ends (in milliseconds) *internal, does not need to be set*
        this.endTime = null;

        // The starting x position of the motion (in world coordinates) *internal, does not need to be set*
        this.startX = null;

        // The starting y position of the motion (in world coordinates) *internal, does not need to be set*
        this.startY = null;

        // The end x position of the motion (in world coordinates)
        this.endX = null;

        // The end y position of the motion (in world coordinates)
        this.endY = null;

        // The speed of the motion (in world coordinates / milliseconds)
        this.speed = null;

        // The velocity X of the motion (in world coordinates / milliseconds)
        this.velocityX = null;

        // The velocity Y of the motion (in world coordinates / milliseconds)
        this.velocityY = null;

        // The angle of the motion (in radians)
        this.angle = null;

        // The angle X component of the motion (in 1/radians)
        this.angleX = null;

        // The angle Y component of the motion (in 1/radians)
        this.angleY = null;

        // Easing functionality for motion
        this.ease = "";

        // Optional Easing in X direction
        this.easeX = "";

        // Optional Easing in Y direction
        this.easeY = "";

    };

    return data.define("motion", Motion);
});