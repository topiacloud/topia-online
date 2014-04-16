// Manages inserting/removing DOM canvas elements.
define(["../../common/data", "../../common/cache", "../../common/canvas"], function (data, cache, Canvas) {

    data("canvas").on("save", function (each) {

        var key = "canvas" + each.id;
        var canvas = cache.get(key) || cache.set(key, new Canvas(each));

        if (canvas.append()) {
            // Todo:  The canvas should be appended by an actual element management system
            data("element").save({ tag: "canvas", selector: "#canvas" + each.id, type: "canvas", target: each.id });
        }

        canvas.init(each);

        each.width = canvas.width;
        each.height = canvas.height;
    });
});