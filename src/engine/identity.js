define(function() {

    var identities = {};

    return {
        next: function (name) {
            if (!identities[name]) {
                identities[name] = 0;
            }

            identities[name] += 1;

            return identities[name];
        }
    };
});