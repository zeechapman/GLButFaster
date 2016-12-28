// TODO: stop it from repeating after it keeps getting lucky

// Variables
var rate = 1; // Speed of the audio
var aud = "../media/aud/gl-";  // Specifying the path of the media of choice as a shortcut
var counter = 0;

var sndStart = new Howl({ src: aud + "start.ogg" }); // Start of the audio
var sndMid = new Howl({ src: aud + "mid.ogg", rate: rate }); // The part where the song goes "We're up all night to get lucky"
var sndEnd = new Howl({ src: aud + "end.ogg" }); // End the pain


// This is the part that gets kind of tricky.  Call a new Howl object for EACH ogg file for the chorus sections...this is gonna be fun
var L0 = new Howl({ src: aud + "0.ogg", onend: function () { lyricsMix(); } });
var L1 = new Howl({ src: aud + "1.ogg", onend: function () { lyricsMix(); } });
var L2 = new Howl({ src: aud + "2.ogg", onend: function () { lyricsMix(); } });
var L3 = new Howl({ src: aud + "3.ogg", onend: function () { lyricsMix(); } });
var L4 = new Howl({ src: aud + "4.ogg", onend: function () { lyricsMix(); } });
var L5 = new Howl({ src: aud + "5.ogg", onend: function () { lyricsMix(); } });
var L6 = new Howl({ src: aud + "6.ogg", onend: function () { lyricsMix(); } });
var L7 = new Howl({ src: aud + "7.ogg", onend: function () { lyricsMix(); } });

// Random number
function ran() {
    return Math.floor(Math.random() * 8);
}

function getLucky() {
    rate += 0.1;
    console.log(rate);
    sndMid.play();
    sndMid.rate(rate);
    sndMid.once('end', function () { if (rate < 2) { getLucky(); } else { sndEnd.play(); } });
}

function lyricsMix() {
    var random = ran();
    if (counter <= 5) {
        // Gah, switch cases it is then
        switch (random) {
            case 0:
                L0.rate(rate).play();
                break;
            case 1:
                L1.rate(rate).play();
                break;
            case 2:
                L2.rate(rate).play();
                break;
            case 3:
                L3.rate(rate).play();
                break;
            case 4:
                L4.rate(rate).play();
                rate += 0.01;
                break;
            case 5:
                L5.rate(rate).play();
                break;
            case 6:
                L6.rate(rate).play();
                break;
            case 7:
                L7.rate(rate).play();
                rate += 0.01;
                break;
            default:
                window.alert("Um...this isn't supposed to happened...");
        }
    } else {
        getLucky();
    }
    counter++;
    console.log(random + " " + counter);
}

// It's jQuery ti-- wait...
window.onload = function () {
    sndStart.play();
    sndStart.on('end', function () {
        lyricsMix();
    });
    
};