// Variables
var rate = 1; // Speed of the audio
var aud = "../media/aud/gl-";  // Specifying the path of the media of choice as a shortcut
var lyrics = [aud + "0.ogg", aud + "1.ogg", aud + "2.ogg", aud + "3.ogg", aud + "4.ogg", aud + "5.ogg", aud + "6.ogg", aud + "7.ogg", aud + "8.ogg", aud + "9.ogg"];


// Random number
function ran() {
    return Math.floor(Math.random() * 10);
}

// It's jQuery ti-- wait...
window.onload = function () {
    // The sound that starts
    var sndStart = new Howl({ src: aud + "start.ogg"});

    // Sections of the lyrics
    var sndLyrics = new Howl({ src: lyrics[ran()] });

    // The "middle point"
    var sndMid = new Howl({ src: aud + "mid.ogg", rate: rate });

    // The end is here...END IT
    var sndEnd = new Howl({ src: aud + "end.ogg" });


    sndStart.play();
    
};