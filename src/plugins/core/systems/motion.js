// Motion controller system, moves a set of x,y coordinates from an initial position to an end position (if there is one)
define(["data"], function (data) {


    data("motion").on("add", function(motion) {

        if (!motion.target) { throw "motion: no target found"; }

        var xfields = { target: motion.target, field: "x" };
        var yfields = { target: motion.target, field: "y" };

        if (!(motion.startX === null)) { xfields["startValue"] = motion.startX; }
        if (!(motion.startY === null)) { yfields["startValue"] = motion.startY; }
        if (!(motion.ease === null)) { xfields["ease"] = motion.ease; yfields["ease"] = motion.ease; }
        if (!(motion.easeX === null)) { xfields["ease"] = motion.easeX; }
        if (!(motion.easeY === null)) { yfields["ease"] = motion.easeY; }

        if (!(motion.endX === null) && !(motion.endY === null)) {

            xfields["endValue"] = motion.endX;
            yfields["endValue"] = motion.endY;

            if (!(motion.time === null)) {

                xfields["time"] = motion.time;
                yfields["time"] = motion.time;

            } else if (!(motion.speed) === null) {

                xfields["rate"] = motion.speed;
                yfields["rate"] = motion.speed;

            } else {
                throw "motion: a time or speed is required for this type of motion"
            }
        } else if (!(motion.angle === null)) {

            if (!(motion.speed === null)) {

                xfields["rate"] = Math.cos(motion.angle) * motion.speed;
                yfields["rate"] = Math.sin(motion.angle) * motion.speed;

                if (!(motion.time === null)) {
                    xfields["time"] = motion.time;
                    yfields["time"] = motion.time;
                    xfields["endValue"] = xfields.rate * motion.time;
                    yfields["endValue"] = yfields.rate * motion.time;
                }

            } else {
                throw "motion: a speed is required for this type of motion"
            }

        } else if (!(motion.angleX === null) && !(motion.angleY === null)) {
            
            if (!(motion.speed === null)) {

                xfields["rate"] = motion.angleX * motion.speed;
                yfields["rate"] = motion.angleY * motion.speed;

                if (!(motion.time === null)) {
                    xfields["time"] = motion.time;
                    yfields["time"] = motion.time;
                    xfields["endValue"] = xfields.rate * motion.time;
                    yfields["endValue"] = yfields.rate * motion.time;
                }

            } else {
                throw "motion: a speed is required for this type of motion"
            }

        } else if (!(motion.velocityX === null) && !(motion.velocityY === null)) {

            xfields["rate"] = motion.velocityX;
            yfields["rate"] = motion.velocityY;

            if (!(motion.time === null)) {
                xfields["time"] = motion.time;
                yfields["time"] = motion.time;
                xfields["endValue"] = xfields.rate * motion.time;
                yfields["endValue"] = yfields.rate * motion.time;
            }

        } else {
            throw "motion: invalid motion parameters"
        }

        var xtransform = data.transform.add( xfields );
        var ytransform = data.transform.add( yfields );

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

});