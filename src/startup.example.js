define({

    plugins: [
        "core",
        "topia"
    ],

    start: function(data) {
        data("rectangle").save({ x: 100, y: 100, width: 100, height: 100, color: "blue" });
    }
});