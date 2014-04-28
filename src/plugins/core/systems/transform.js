// The transformation system, it transforms a target's field using easing rules
define(["data"], function (data) {

    data.tick.on(["time"], function (tick) {
        data.transform.each(function (transform) {

            // first get the transform target
            var target = data.get(transform.target);

            // if we have a start time, that means this transform has already started
            if (transform.startTime) {
                
                // does this transform ever end? Also, are we at or past the end time?
                if (transform.endTime && tick.time >= transform.endTime) {

                    // we have reached the end time, set the field to the final value (just in case it went over)
                    target[transform.field] = transform.endValue;

                    // now remove the transform
                    data.transform.remove(transform);

                // the transform is still ongoing, let's run the correct ease function over the transform
                } else {
                    switch (transform.ease) {
                    case "":
                    case "linear":
                    default:
                        // a simple linear ease function
                        target[transform.field] += tick.delta * transform.rate;
                        break;
                    }
                }
            // we have not yet started this transform
            } else {

                // store the initial transform time using the tick's time
                transform.startTime = tick.time;

                // if the transform doesn't have a from property set, let's take the value from the target's field
                if (!transform.startValue) { transform.startValue = target[transform.field]; }

                // is this a time transform?
                if (transform.time) {

                    // calculating the end time is a simple addition
                    transform.endTime = transform.startTime + transform.time;

                    // is there an end value?
                    if (transform.endValue) {
                        
                        // calculate the transform's magnitude
                        transform.magnitude = transform.endValue - transform.startValue;

                        // calculate the rate of increase (or decrease)
                        transform.rate = transform.magnitude / transform.time;

                    } else {
                        throw "transform: for a time transform, a transform.endValue is required"
                    }

                // is this a rate transform?
                } else if (transform.rate) {

                    // is there an end value?
                    if (transform.endValue) {

                        // calculate the transform's magnitude
                        transform.magnitude = transform.endValue - transform.startValue;

                        // calculate the end time, recall that rate = DX / DT, where DX = X1 - X0, and DT = T1 - T0, to find T1, algebra it out
                        transform.endTime = transform.magnitude / transform.rate + transform.startTime;
                    }

                } else {
                    throw "transform: a rate or time is required"
                }
                
            }

        });
    });
});