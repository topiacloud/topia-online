// Handles the initializing and lifespan of panels
define(["data", "../common/cache", "../common/string"], function (data, cache, string) {

    var getTemplateKey = function (name) {
        return string.replace(name, "/", "_").split(".")[0];
    };

    var createPanel = function (panel) {

        data.ui.add({
            template: "content/templates/window/window.html",
            title: panel.title,
            width: panel.width,
            height: panel.height,
            content: getTemplateKey(panel.template),
            header: panel.header || true,
            position: panel.position,
            source: panel.source || 0,

            close: function () {
                $("#topia-ui-" + this.id).remove();
                data.ui.remove(this);
            }
        });
    };

    data.panel.on("add", function (panel) {

        // Load template for the window's content
        var key = getTemplateKey(panel.template);
        var exists = $("#" + key).length > 0;

        if (!exists) {
            $.get(panel.template, function (doc, status, response) {
                var html = $(response.responseText).attr("id", key);
                $("body").append(html);

                createPanel(panel);
            });
        } else {
            createPanel(panel);
        }
    });
});