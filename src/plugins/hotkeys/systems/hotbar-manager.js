define(["data"], function(data) {

    data.hotkeys.bar.on("add", function(bar) {

        data.panel.add({
            template: "plugins/hotkeys/content/templates/hotbar.html",
            position: bar.position,
            source: bar.id
        });
    });

});