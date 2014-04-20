define(function() {

    var File = function(init) {
        init = init || {};

        this.name = init.name || "";
        this.data = init.data || null;
        this.contentType = init.contentType || "";
        this.type = init.type || "unknown";

        _.extend(this, init);
    };

    var isImage = function(file) {
        var imageTest = /^image\/(?:bmp|cis\-cod|gif|ief|jpeg|pipeg|png|svg\+xml|tiff|x\-cmu\-raster|x\-cmx|x\-icon|x\-portable\-anymap|x\-portable\-bitmap|x\-portable\-graymap|x\-portable\-pixmap|x\-rgb|x\-xbitmap|x\-xpixmap|x\-xwindowdump)$/i;

        return imageTest.test(file.type);
    };

    var loadFiles = function (files, callback) {
        if (files && files.length) {

            _.each(files, function (file) {
                var reader = new FileReader();

                var fileType = "unknown";

                if (isImage(file)) {
                    fileType = "image";
                }
                else if (file.type.indexOf("json") >= 0 || file.name.endsWith(".json")) {
                    fileType = "json";
                }
                else if (file.type.indexOf("javascript") >= 0 || file.name.endsWith(".js")) {
                    fileType = "javascript";
                }
                else if (file.type.indexOf("text/html") >= 0 || file.name.endsWith(".html")) {
                    fileType = "html";
                }

                reader.onload = function (load) {
                    callback(new File({ name: file.name, contentType: file.type, data: load.target.result, type: fileType }));
                };

                if (fileType == "image") {
                    reader.readAsDataURL(file);
                } else {
                    reader.readAsText(file);
                }
            });
        }
    };

    return {
        load: function(files, callback) {
            return loadFiles(files, callback);
        }
    };
});