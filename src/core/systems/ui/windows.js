// Handles the initializing and lifespan of windows.
// Todo:  Rename this to something else to avoid conflicts
define(["../../common/data", "../../common/cache", "../../common/string"], function (data, cache, string) {

    var windows = data("window");
    var ui = data("ui");

    var getTemplateKey = function (name) {
        return string.replace(name, "/", "_").split(".")[0];
    };

    var createWindow = function (win) {
        ui.save({
            template: "content/templates/window/window.html",
            title: win.title,
            width: win.width,
            height: win.height,
            content: getTemplateKey(win.template),
            header: win.header || true,
            position: win.position,

            close: function () {
                $("#topia-ui-" + this.id).remove();
                ui.remove(this);
            }
        });
    };

    windows.on("save", function (win) {

        // Load template for the window's content
        var key = getTemplateKey(win.template);
        var exists = $("#" + key).length > 0;

        if (!exists) {
            $.get(win.template, function (doc, status, response) {
                var html = $(response.responseText).attr("id", key);
                $("body").append(html);

                createWindow(win);
            });
        } else {
            createWindow(win);
        }
    });
});