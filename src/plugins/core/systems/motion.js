// Motion controller system, moves a set of x,y coordinates from an initial position to an end position (if there is one)
define(["data"], function (data) {
    
    data("motion").on("add", function(motion) {

        // do we have a target? If not, throw an error..
        if ((motion.type === null) || (motion.target === null)) {
            throw "motion has no type or target specified."

        // we have a target, now let's do some work
        } else {

            // get a reference to the target
            var target = data(motion.type).get(motion.target);

            // internal variables are set
            if ((motion.startX === null) && (motion.startY === null)) {
                motion.startX = target.x;
                motion.startY = target.y;
            }

            // check which properties are set
            // we have a motion with an end position, it requires a time or speed
            if (!(motion.endX === null) && !(motion.endY === null)) {

                // calculate the delta of the motion
                var dx = motion.endX - motion.startX;
                var dy = motion.endY - motion.startY;

                // it has a time in milliseconds, calculate it's velocity
                if (!(motion.time === null)) {

                    if (motion.time <= 0) {
                        throw "motion: time cannot be 0 or less!"
                    } else {
                        motion.velocityX = dx / motion.time;
                        motion.velocityY = dy / motion.time;
                    }

                // it has a speed in distance per milliseconds, calculate it's velocity
                } else if (!(motion.speed === null)) {

                    var angle = Math.atan2(dy, dx);
                    var distance = Math.sqrt(dy*dy + dx*dx);

                    motion.velocityX = motion.speed * cos(angle);
                    motion.velocityY = motion.speed * sin(angle);
                    motion.time = distance / motion.speed;

                // if it has neither a speed nor time, throw an error
                } else {
                    throw "motion with end position requires a speed or time."
                }

            // we have a motion with an angle, speed, and/or time
            } else if (!(motion.angle === null)) {

                // if we don't have a speed, then we cannot calculate a velocity
                if (motion.speed === null) {
                    throw "motion with angle requires a speed."
                } else {

                    // calculate the velocity
                    motion.velocityX = Math.cos(motion.angle) * motion.speed;
                    motion.velocityY = Math.sin(motion.angle) * motion.speed;

                    // a motion with an angle, speed and time (without a time, there is no endX/endY)
                    if (!(motion.time === null)) {
                        motion.endX = motion.startX + motion.velocityX * motion.time;
                        motion.endY = motion.startY + motion.velocityY * motion.time;
                    }

                }

            // we have a motion with an angleX and angleY
            } else if (!(motion.angleX === null) && !(motion.angleY === null)) {
                
                // if we don't have a speed, then we cannot calculate a velocity
                if (motion.speed === null) {
                    throw "motion with angle requires a speed."
                } else {

                    // calculate the velocity
                    motion.velocityX = motion.angleX * motion.speed;
                    motion.velocityY = motion.angleY * motion.speed;

                    // a motion with an angle, speed and time (without a time, there is no endX/endY)
                    if (!(motion.time === null)) {
                        motion.endX = motion.startX + motion.velocityX * motion.time;
                        motion.endY = motion.startY + motion.velocityY * motion.time;
                    }

                }

            // we have a motion with just a velocity, no work required and this is a valid motion
            } else if (!(motion.velocityX === null) && !(motion.velocityY === null)) {

                // if we don't have a time, it means the motion controller just keeps moving
                // if instead we have a time, it means the motion controller will just move for the amount of time
                if (!(motion.time === null)) {
                    motion.endX = motion.startX + motion.velocityX * motion.time;
                    motion.endY = motion.startY + motion.velocityY * motion.time;
                }

            // throw an error because we don't have enough parameters set!
            } else {
                throw "motion cannot understand this set of parameters (or there aren't enough)."
            }

            motion.save();
        }
    });

/*  silly debug example
    data("motion").on("remove", function(motion) {
        var exampleMotion = {
            type: motion.type,
            target: motion.target,
            time: Math.random() * 4000,
            speed: Math.random() * 0.1,
            angle: Math.random() * 2 * Math.PI
        };

        data("motion").save(exampleMotion);
    });
*/

    // Every frame
    data("frame").on("save", function(frame) {

        // Iterate over each motion
        data("motion").each(function(motion) {

            // get a reference to the target
            var target = data(motion.type).get(motion.target);

            // if this is the first frame that we're calculating the motion, do this. (soon to use a logic update tick instead..)
            if ((motion.startTime === null) && !(motion.time === null)) {
                motion.startTime = frame.time;
                motion.endTime = frame.time + motion.time;
                motion.save();
            }

            // we've reached the end of motion
            if (frame.time >= motion.endTime) {

                // set the target position to the destination, just in case we went too far
                //target.x = motion.endX;
                //target.y = motion.endY;
                //target.save();

                // remove the motion controller
                data("motion").remove(motion);

            // otherwise apply the velocity of the motion to the target
            } else {

                target.x += motion.velocityX * frame.delta;
                target.y += motion.velocityY * frame.delta;
                target.save();
            }
            

        });
    });
});