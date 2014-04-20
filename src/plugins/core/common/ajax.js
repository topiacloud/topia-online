// Simple helper library to fetch resources with AJAX
define({

    json: function(url) {

        return $.ajax({
            url: url,
            type: "GET",
            dataType: "text"
        })
        .then(function(result) {
            return JSON.parse(result);
        });
    }
});