define([], function () {

    var cleanArray = function(items) {
        var newArray = new Array();

        for (var i = 0; i < items.length; i++) {
            if (items[i]) {
                newArray.push(items[i]);
            }
        }

        return newArray;
    };

    exports.matchRoute = function (pattern, path) {

        if (pattern.indexOf("/") >= 0) {
            var patternSegments = cleanArray(pattern.split("/"));
            var pathSegments = cleanArray(path.split("/"));

            if (patternSegments.length == pathSegments.length) {

                var params = {};

                for (var count = 0; count < patternSegments.length; count++) {

                    var patternSegment = patternSegments[count];
                    var pathSegment = pathSegments[count];

                    var left = patternSegment.indexOf("{");
                    var right = patternSegment.indexOf("}");

                    if (left >= 0 && right >= 0) {

                        var match = patternSegment.substring(left + 1, (right) - left);

                        if (match && match.length) {
                            params[match] = pathSegment;
                        }

                        continue;
                    }

                    if (patternSegment != pathSegment) {
                        return false;
                    }
                }

                return params;
            }
        }

        return pattern == path ? path : false;
    };
});