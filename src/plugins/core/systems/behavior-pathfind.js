// A behavior for path following
define(["data"], function (data) {

    var behaviors = data("behavior");
    var motions = data("motion");
    var points = data("point");
    var links = data("link");
    var paths = data("path");

    behaviors.on("add", function(behavior) {
        if (behavior.kind == "pathfind") {
            var path = paths.get(behavior.data);
            var link = links.get(path.step);
            var pointA = points.get(link.pointA);
            var pointB = points.get(link.pointB);

            motions.save({   type: behavior.type, target: behavior.target,
                                    startX: pointA.x, startY: pointA.y,
                                    endX: pointB.x, endY: pointB.y,
                                    time: 2000
            });

        }
    });

    motions.on("remove", function(motion) {

    });

    /*
    // Every frame
    data("frame").on("save", function(frame) {
        var pathfind = data("behavior").get({kind: "pathfind"});

        _.foreach(pathfind, function(path) {
            var link = data("link").get(path.step);
            var pa = data("point").get(link.pointA);
            var pb = data("point").get(link.pointB);

            var motion = data("motion").save({ startx: pa.x, starty: });

        });
    });
    */

});