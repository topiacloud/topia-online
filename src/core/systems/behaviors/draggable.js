/*define({
    name: "Draggable",

    description: "Enables dragging of an element using click or touch input.",

    use: ["core/data/click", "core/data/cursor", "core/data/shape"],

    start: function (clicks, cursor, shapes) {

        clicks.save(function (click) {

            if (click.state == "down") {
                var hover = shapes.first({ hovered: true });

                if (hover) {
                    hover.originalX = hover.x;
                    hover.originalY = hover.y;
                    hover.dragging = true;
                }
            }
            else if (click.state == "up") {
                var dragging = shapes.first({ dragging: true });

                if (dragging) {
                    dragging.dragging = false;
                }
            }
        });

        cursor.save(function (position) {

            var dragging = shapes.first({ dragging: true });

            if (dragging) {
                var click = clicks.first();

                var changeX = position.x - click.x;
                var changeY = position.y - click.y;

                dragging.x = changeX + dragging.originalX;
                dragging.y = changeY + dragging.originalY;
            }
        });
    }
});*/