/*
    The more times I mention about them
    "getting lucky," the more I feel like
    the song is an inuendo.  Kinda weird
*/

// Variables
var rate = 1; // Speed of the audio
var aud = "../media/aud/gl-";  // Specifying the path of the media of choice as a shortcut
var counter = 0; // Counts how many times they tried to do their part.


var loopMax = 15; // Default value - 15
var luckyMax = 13.5; // Default value - 13.5;
var colorLoop = 0; // Reserved for cycleColors()
var colorIndex = 0; // For my pretty list of colors

// Counts how many times they get lucky
var luckyCounter = 0;

// A list of colors.  Because I like colors
var colors = [ "#7d24f2", "#e23f36", "#399362", "#753942", "#d1e236", "#36b2e2"];

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

// Random number generator (remember: it starts out at 0, then counts up)
function ran(max) {
    return Math.floor(Math.random() * max);
}

function cycleColors() {
  setTimeout(function() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorLoop++;
    if (colorIndex > colors.length) {
      colorIndex = -1; // Don't judge me
    }
    colorIndex++;
    if (colorLoop < 80) {
      cycleColors();
    } else {
        document.body.style.backgroundColor = "#000";
    }
  }, 10); // Seizure warning with this one
}

function getLucky() {
    sndMid.play();
    sndMid.rate(rate);
    sndMid.once('end', function () {  // If it plays too fast, then stop it.  If not, then keep the madness going.
      if (rate < luckyMax) {
        document.getElementById("pic").width *= "1.01";
        luckyCounter++;
        getLucky();
      } else {
          sndEnd.play();
          vid.play();
          cycleColors();
          sndEnd.once('end', function() {
              document.getElementById("vid").insertAdjacentHTML('afterend', "<a href='javascript:void(0)' onclick='location.reload()'>Do it again?</a><br /><small>Times they got lucky: <b>" + luckyCounter + "</b><br />(if there's a decimal, only one of them got lucky a couple of times)</small>");
          });
      } });
    rate += 0.04;
}

function lyricsMix() {
    var random = ran(8);
    if (counter <= loopMax) {
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
                L4.rate(rate).play(); // One of the instances of getting lucky
                rate += 0.01; // Since only one of them is getting lucky, speed it up partially
                luckyCounter += 0.5; // Only one of them got lucky
                break;
            case 5:
                L5.rate(rate).play();
                break;
            case 6:
                L6.rate(rate).play();
                break;
            case 7:
                L7.rate(rate).play(); // One of the instances of getting lucky
                rate += 0.01; // Since only one of them is getting lucky, speed it up partially
                luckyCounter += 0.5; // Please refer to line 99
                break;
            default:
                document.getElementById("vid").insertAdjacentHTML('afterend', "<p>Ummm...something happened...you're not supposed to see this...</p>");
        }
    } else {
        getLucky();
        console.log("They're about to stay up all night to get lucky...");
    }
    counter++;
}

// It's jQuery ti-- wait...
window.onload = function () {
  console.log("Are you ready for a world of hurt?");
    var vid = document.getElementById("vid");
    sndStart.play();
    sndStart.on('end', function () {
        console.log("Time to mix things up a bit...");
        lyricsMix();
    });

};
