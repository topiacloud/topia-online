define(["data"], function(data) {

    data.hotkeys.bar.on("add", function(bar) {

        for (var button = 1; button <= bar.buttons; button++) {

            data.hotkeys.button.add({
                index: button,
                bar: bar.id
            });
        }

        data.panel.add({
            template: "plugins/hotkeys/content/templates/hotbar/hotbar.html",
            position: bar.position,
            source: bar.id,
            frame: false
        });
    });

});