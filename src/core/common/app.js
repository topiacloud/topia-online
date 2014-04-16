// The top-level 'app' object container for data/systems/cache
define(["./data", "./cache"], function (data, cache) {

    return {
        data: data,
        cache: cache
    };
});