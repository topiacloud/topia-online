// A simple global key/value store.
define(function () {

    var _store = {};

    return {
        _store: _store,

        /**
         * Sets a value in the cache by key.
         * @param {string} key The key to lookup.
         * @param {string} value The value to assign.
         * @returns {object} Returns the value.
         */
        set: function (key, value) {
            _store[key] = value;
            return _store[key];
        },

        /**
         * Removes an object in the cache by key.
         * @param {string} key The key of the object to remove.
         */
        remove: function (key) {
            delete _store[key];
        },

        /**
         * Retrieves an object in the cache by key.
         * @param {string} key The key of the object to get.
         * @returns {object} Returns the value.
         */
        get: function(key) {
            return _store[key];
        }
    };
});