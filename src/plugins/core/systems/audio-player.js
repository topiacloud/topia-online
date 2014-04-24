define(["data"], function(data) {

    data.sound.on("add", function(sound) {
        var fileType = sound.file.split(".")[1];

        var audio = $("<audio autoplay><source src='" + sound.file + "' type='audio/" + fileType + "'></source></audio>");

        $("body").append(audio);

        audio.bind("ended", function() {
            data.sound.remove(sound);
        });
    });
});