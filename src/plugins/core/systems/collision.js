// A collision reporting system
define(["data"], function (data) {

    var collision = data("collision");
    var hitboxes = data("hitbox");

    // for now, let's check for collisions everytime a hitbox changes position
    hitboxes.on("save", function (hitboxA) {

        // check for any collisions
        hitboxes.each(function (hitboxB) {

            // make sure we are not comparing the same hitbox with itself!
            if (hitboxA.id != hitboxB.id) {

                var x0A = hitboxA.x;                    // left edge of A
                var x1A = hitboxA.x + hitboxA.width;    // right edge of A
                var y0A = hitboxA.y;                    // top edge of A
                var y1A = hitboxA.y + hitboxA.height;   // bottom edge of A

                var x0B = hitboxB.x;                    // left edge of B
                var x1B = hitboxB.x + hitboxB.width;    // right edge of B
                var y0B = hitboxB.y;                    // top edge of B
                var y1B = hitboxB.y + hitboxB.height;   // bottom edge of B
                
                var xCA = hitboxA.x + (hitboxA.width  * 0.5); // calculate the center X position of A
                var yCA = hitboxA.y + (hitboxA.height * 0.5); // calculate the center Y position of A
                var xCB = hitboxB.x + (hitboxB.width  * 0.5); // calculate the center X position of B
                var yCB = hitboxB.y + (hitboxB.height * 0.5); // calculate the center Y position of B

                var BleftAright = x0B > x1A;
                var BrightAleft = x1B < x0A;
                var BtopAbottom = y0B > y1A;
                var BbottomAtop = y1B < y0A;

                // do a silly rectangle intersection check
                if (!(BleftAright || BrightAleft || BtopAbottom || BbottomAtop)) {

                    var idleB = false;
                    var idleA = false;

                    // Has hitboxA moved since the last time?
                    if ((hitboxA.x == hitboxA.lastX) && (hitboxA.y == hitboxA.lastY) ||
                        (hitboxA.lastX == null) && (hitboxA.lastY == null)) {
                        idleA = true;
                    }

                    // Has hitboxB moved since the last time?
                    if ((hitboxB.x == hitboxB.lastX) && (hitboxB.y == hitboxB.lastY) ||
                        (hitboxB.lastX == null) && (hitboxB.lastY == null)) {
                        idleB = true;
                    }

                    // so these rectangles are overlapping, now let's make sure it hasn't been added before..
                    var checkA = collision.get({a:hitboxA.id, b:hitboxB.id});
                    var checkB = collision.get({b:hitboxA.id, a:hitboxB.id});

                    // so there were no collisions already, let's add this one
                    if ((checkA.length == 0) && (checkB.length == 0)) {

                        // calculate the amount of axis overlap
                        var dx = Math.abs(xCB - xCA);
                        var dy = Math.abs(yCB - yCA);

                        var fx = 0;
                        var fy = 0;

                        // find the axis with the smallest overlap
                        if (dx < dy) { fx = dx; } else { fy = dy; }

                        // always save this collision, since there aren't any
                        collision.save({ x: -fx, y: -fy, hitboxA: hitboxA.id, hitboxB: hitboxB.id });

                        // if both of them aren't idle, we need to apply a collision for B as well
                        if (!idleA && !idleB) {
                            collision.save({ x: fx, y: fy, hitboxA: hitboxB.id, hitboxB: hitboxA.id });
                        }
                    }

                }
            }
        });

        // store the old positions
        hitboxA.lastX = hitboxA.x;
        hitboxA.lastY = hitboxA.y;
    });

});