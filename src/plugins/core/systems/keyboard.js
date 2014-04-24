// Dispatches keyboard input.
define(["data"], function (data) {

    var key = data.keypress.add({ button: 0, time: 0, state: "up" });

    $(document).keydown(function (e) {
        key.button = e.which;
        key.time = new Date().getTime();
        key.state = "down";
        data.keypress.commit();
    });

    $(document).keyup(function (e) {
        key.button = e.which;
        key.time = new Date().getTime();
        key.state = "up";
        data.keypress.commit();
    });

    $(document).keypress(function (e) {
        key.button = e.which;
        key.time = new Date().getTime();
        key.state = "press";
        data.keypress.commit();
    });
});