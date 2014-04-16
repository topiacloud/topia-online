// Handles touch events on hoverable objects
define(["../../common/data"], function (data) {

    data("touch").on("save", function(touch) {

        if (touch.type == "camera") {
            
            data("region").each(function(region) {

                if (touch.x >= region.x && touch.x <= region.x + region.width) {
                    if (touch.y >= region.y && touch.y <= region.y + region.height) {
                        touch.type = "region";
                        touch.target = region.id;
                        touch.x -= region.x;
                        touch.y -= region.y;
                        touch.save();
                        return;
                    }
                }
            });
        }
    });
});