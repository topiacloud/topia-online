// Enables dropping files onto the document
define(["core/common/data", "core/common/file"], function (data, file) {

    $("body").bind("dragstart", function (e) {
        /*if (!settings.data || settings.data() == null) {
            return false;
        }*/

        e.originalEvent.dataTransfer.effectAllowed = "link";
    });

    $("body").bind("dragover", function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.originalEvent.dataTransfer.dropEffect = "link";
        return false;
    });

    $("body").bind("drop", function (e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }

        e.preventDefault();
        e = e.originalEvent;

        var files = e.target.files || e.dataTransfer.files;

        if (files && files.length > 0) {
            file.load(files, function (result) {
                result.x = e.clientX;
                result.y = e.clientY;

                data("drop").save(result);
            });
        }


        return false;
    });
});