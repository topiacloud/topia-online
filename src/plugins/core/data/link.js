// A link data type
define(["data"], function (data) {

    var Link = function () {

        // The link's from point id
        this.pointA = null;

        // The link's to point id
        this.pointB = null;
    };

    return data.define("link", Link);
});
