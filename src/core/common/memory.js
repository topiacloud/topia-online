define({

    get: function (obj) {
        var total = 0;

        if (obj == undefined) {
            return total;
        }

        switch (typeof obj) {

            case "object":

                // Add 4 bytes for reference
                total += 4;

                if (_.isArray(obj)) {
                    for (var index = 0; index < obj.length; index++) {
                        total += this.get(obj[index]);
                    }
                } else {
                    for (var each in obj) {
                        // Add bytes for field name
                        total += (2 * each.length);

                        // Add bytes for field value
                        total += this.get(obj[each]);
                    }
                }

                break;

            case "number":
                total += 8;
                break;

            case "string":
                total += (2 * (obj.length + 1));
                break;

            case "boolean":
                total += 4;
                break;
        }

        return total;
    }
});