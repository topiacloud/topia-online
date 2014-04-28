// The transform data type, used to transform a target's field using easing rules
define(["data"], function (data) {
    
    var Transform = function () {

        // The target ID
        this.target = null;

        // The field of the target being transformed, for instance "x" or "hp"..
        this.field = "";

        // The selected ease function, "" and "linear" are the same
        this.ease = "";

        // The initial value
        this.startValue = null;

        // The end value (optional)
        this.endValue = null;

        // The duration of the ease function in milliseconds
        this.time = null;

        // The rate of the transform in value per milliseconds
        this.rate = null;

        // internal variable for the start time
        this.startTime = null;

        // internal variable for the end time
        this.endTime = null;

        // internal variable for magnitude
        this.magnitude = null;
    };

    return data.define("transform", Transform);
});