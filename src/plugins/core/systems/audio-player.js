define(["data"], function(data) {

    data("sound").on("save", function(sound) {
        var fileType = sound.file.split(".")[1];
        
        $("body").append("<audio autoplay><source src='" + sound.file + "' type='audio/" + fileType + "'></source></audio>");

        data("sound").remove(sound);
    });
});