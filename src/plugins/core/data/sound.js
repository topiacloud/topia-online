// Represents an audio playback
define(["data"], function (data) {

    var Sound = function () {

        // The filename of the sound, can be ogg, mp3, or wav
        this.file = "";
    };

    return data.define("sound", Sound);
});