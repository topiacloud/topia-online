﻿// Used to represent an arbitrary group of data objects
define(["data"], function (data) {

    var Group = function () {

        // Friendly identifier for the group
        this.name = "";
    };

    return data.define("group", Group);
});