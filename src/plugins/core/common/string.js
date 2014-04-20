define(function() {

    return {
        replace: function (text, from, to) {
            return text.replace(new RegExp(from, 'g'), to);
        }
    };
});