define(function() {

    return {
        doesRectangleOverlap: function (r1left, r1Top, r1Right, r1Bottom, r2left, r2Top, r2Right, r2Bottom) {
            return r1left < r2Right && r1Right > r2left && r1Top < r2Bottom && r1Bottom > r2Top;
        }
    };
});