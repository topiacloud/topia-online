// Exports all data to a JSON format as a file download
define(["data"], function (data) {
    
    data("operation").on("save", function (operation) {
        if (operation.type == "export") {
            var json = {};

            var success = true;
            var errorReason = "";

            _.each(data.stores(), function(store) {

                if (!success) {
                    return;
                }

                try {
                    JSON.stringify(store.items);
                } catch (error) {
                    console.error(store.items);
                    errorReason = "Unable to export data from store: " + store.name;
                    success = false;
                    return;
                }

                json[store.name] = store.items;
            });

            if (!success) {
                alert(errorReason);
                return;
            }

            json["_reload"] = true;

            var uri = "data:text/json;charset=utf-8," + escape(JSON.stringify(json));

            var a = document.createElement("a");
            a.setAttribute("download", "topia-export.json");
            a.id = "topia_export_temp";
            a.href = uri;
            a.innerHTML = "";
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();

            $("#topia_export_temp").remove();
        }
    });
});