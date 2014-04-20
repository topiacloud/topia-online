/*  A motion is an tween/interpolation controller that will move depending on input parameters
 *  if you assign an endX and endY (in world coordinates) then you must assign either time or speed (time has priority).
 *  if instead you assign an angle (in radians), then you must assign a speed, and time is optional (if no time is set, it moves forever)
 *  if instead you assign an angleX and angleY (in range -1 to +1), then you must assign a speed, and time is optional (if no time is set, it moves forever)
 *  if instead you assign a velocityX and velocityY (in world coordinates per milliseconds), then you can also assign a time (if no time is set, it moves forever)
 *  otherwise it will throw an error
 */
define(["data"], function (data) {
    
    var Motion = function () {

        // Type of data that is performing the tween, must have 'x' and 'y' properties (could be a "rectangle", "camera", "sprite", etc)
        this.type = "";

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

    };

    return data.define("motion", Motion);
});