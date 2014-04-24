// Motion controller system, moves a set of x,y coordinates from an initial position to an end position (if there is one)
define(["data"], function (data) {

    function easeInQuad(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * currentIteration / totalIterations + startValue;
    }

    /*


    function easeInQuad(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * (currentIteration /= totalIterations) * currentIteration + startValue;
    }


    function easeOutQuad(currentIteration, startValue, changeInValue, totalIterations) {
        return -changeInValue * (currentIteration /= totalIterations) * (currentIteration - 2) + startValue;
    }


    function easeInCubic(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * Math.pow(currentIteration / totalIterations, 3) + startValue;
    }


    function easeOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
    }


    function easeInQuart(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * Math.pow (currentIteration / totalIterations, 4) + startValue;
    }


    function easeOutQuart(currentIteration, startValue, changeInValue, totalIterations) {
        return -changeInValue * (Math.pow(currentIteration / totalIterations - 1, 4) - 1) + startValue;
    }

    function easeInQuint(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * Math.pow (currentIteration / totalIterations, 5) + startValue;
    }


    function easeOutQuint(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 5) + 1) + startValue;
    }

    function easeInSine(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * (1 - Math.cos(currentIteration / totalIterations * (Math.PI / 2))) + startValue;
    }


    function easeOutSine(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * Math.sin(currentIteration / totalIterations * (Math.PI / 2)) + startValue;
    }

    function easeInExpo(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * Math.pow(2, 10 * (currentIteration / totalIterations - 1)) + startValue;
    }


    function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
    }

    function easeInCirc(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * (1 - Math.sqrt(1 - (currentIteration /= totalIterations) * currentIteration)) + startValue;
    }


    function easeOutCirc(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * Math.sqrt(1 - (currentIteration = currentIteration / totalIterations - 1) * currentIteration) + startValue;
    }
    */

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

            switch (motion.ease) {
                case "":
                case "linear":

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

                            motion.velocityX = motion.speed * Math.cos(angle);
                            motion.velocityY = motion.speed * Math.sin(angle);
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
                    break;

//  ###################################################################################################################################

                case "cubic":
                    // ct is current time, x0 is initial value, dx is change in value (dx), df is duration
                    //ct /= df;
	                //return dx*ct*ct + x0;

                    //target.x = 
                    break;

            }
            
        }
    });

/*  TEST CASES:
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

    // Every frame
    data.tick.on("time", function(tick) {

        // Iterate over each motion
        data("motion").each(function(motion) {

            // get a reference to the target
            var target = data(motion.type).get(motion.target);

            // if this is the first frame that we're calculating the motion, do this. (soon to use a logic update tick instead..)
            if ((motion.startTime === null) && !(motion.time === null)) {
                motion.startTime = tick.time;
                motion.endTime = motion.startTime + motion.time;
                motion.save();
            }

            // we've reached the end of motion
            if (!(motion.endTime === null) && (tick.time >= motion.endTime)) {

                // set the target position to the destination, just in case we went too far
                target.x = motion.endX;
                target.y = motion.endY;
                target.save();

                // remove the motion controller
                data("motion").remove(motion);

            // otherwise apply the velocity of the motion to the target
            } else {

                switch (motion.ease) {
                case "":
                case "linear":
                    target.x += motion.velocityX * tick.delta;
                    target.y += motion.velocityY * tick.delta;
                    break;

                case "quad-inout":
                    var dx = (motion.endX - motion.startX) / 2;
                    var dy = (motion.endY - motion.startY) / 2;
                    var time = frame.time / (motion.endTime / 2);

                    if (time < 1) {
                        var tpow = time * time;
                        target.x = dx * tpow + motion.startX;
                        target.y = dy * tpow + motion.startY;
                    } else {
                        var tpow = ((--time)*(time-2)-1);
                        target.x = -dx * tpow + motion.startX;
                        target.y = -dy * tpow + motion.startY;
                    }
                    break;

                case "cubic-inout":
                    var dx = (motion.endX - motion.startX) / 2;
                    var dy = (motion.endY - motion.startY) / 2;
                    var time = frame.time / (motion.endTime / 2);

                    if (time < 1) {
                        var tpow = Math.pow(time, 3);
                        target.x = dx * tpow + motion.startX;
                        target.y = dy * tpow + motion.startY;
                    } else {
                        var tpow = Math.pow(time - 2, 3);
                        target.x = dx * (tpow + 2) + motion.startX;
                        target.y = dy * (tpow + 2) + motion.startY;
                    }
                    break;

                case "quart-inout":
                    var dx = (motion.endX - motion.startX) / 2;
                    var dy = (motion.endY - motion.startY) / 2;
                    var time = tick.time / (motion.endTime / 2);

                    if (time < 1) {
                        var tpow = Math.pow(time, 4);
                        target.x = dx * tpow + motion.startX;
                        target.y = dy * tpow + motion.startY;
                    } else {
                        var tpow = Math.pow(time - 2, 4);
                        target.x = -dx * (tpow - 2) + motion.startX;
                        target.y = -dy * (tpow - 2) + motion.startY;
                    }
                    break;

                case "quint-inout":
                    var dx = (motion.endX - motion.startX) / 2;
                    var dy = (motion.endY - motion.startY) / 2;
                    var time = tick.time / (motion.endTime / 2);
                    var tpow = 0;

                    if (time < 1) { tpow = Math.pow(time, 5); }
                    else          { tpow = Math.pow(time - 2, 5) + 2; }

                    target.x = dx * tpow + motion.startX;
                    target.y = dy * tpow + motion.startY;
                    break;

                case "sine-inout":
                    var dx = (motion.endX - motion.startX) / 2;
                    var dy = (motion.endY - motion.startY) / 2;
                    var time = (1 - Math.cos(Math.PI * tick.time / motion.endTime));

                    target.x = dx * time + motion.startX;
                    target.y = dy * time + motion.startY;
                    break;

                case "expo-inout":
                    var dx = (motion.endX - motion.startX) / 2;
                    var dy = (motion.endY - motion.startY) / 2;
                    var time = tick.time / (motion.endTime / 2);
                    var tpow = 0;

                    if (time < 1) { tpow =  Math.pow(2,  10 * (time - 1)); }
                    else          { tpow = -Math.pow(2, -10 * (--time)) + 2; }

                    target.x = dx * tpow + motion.startX;
                    target.y = dy * tpow + motion.startY;
                    break;

                case "circ-inout":
                    var dx = (motion.endX - motion.startX) / 2;
                    var dy = (motion.endY - motion.startY) / 2;
                    var time = tick.time / (motion.endTime / 2);
                    var tpow = 0;

                    if (time < 1) { tpow = 1 - Math.sqrt(1 - time * time); }
                    else          { tpow = 1 + Math.sqrt(1 - (time -= 2) * time); }

                    target.x = dx * tpow + motion.startX;
                    target.y = dy * tpow + motion.startY;
                    break;
                    
                }

                target.save();
            }
            
            
        });
    });
});