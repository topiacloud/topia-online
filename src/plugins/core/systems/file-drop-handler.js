// Executes javascript/JSON when dropped
define(["data"], function (data) {

    data("drop").on("save", function (drop) {

        if (drop.type == "javascript") {
            eval(drop.data);
        }
        else if (drop.type == "json") {
            var json = JSON.parse(drop.data);

            if (json) {
                if (json._reload) {
                    // Todo: Need to clear ALL data
                    data.clear();
                }
            }
        }
    });

});