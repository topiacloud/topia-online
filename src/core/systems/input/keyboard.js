// Dispatches keyboard input.
define(["core/common/data"], function (data) {

    var key = data("keypress").save({ button: 0, time: 0, state: "up" });

    $(document).keydown(function (e) {
        key.button = e.which;
        key.time = new Date().getTime();
        key.state = "down";
        key.save();
    });

    $(document).keyup(function (e) {
        key.button = e.which;
        key.time = new Date().getTime();
        key.state = "up";
        key.save();
    });

    $(document).keypress(function (e) {
        key.button = e.which;
        key.time = new Date().getTime();
        key.state = "press";
        key.save();
    });
});