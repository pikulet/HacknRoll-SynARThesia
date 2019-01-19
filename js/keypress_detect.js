function generateNoteMap() {
  var letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i',
    'a', 's', 'd', 'f', 'h', 'j', 'k', 'l',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ','
  ];
  var notes = [
    // "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
    "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5",
    "C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6",
    "C6", "D6", "E6", "F6", "G6", "A6", "B6", "C7",
  ];

  var note_map = {}
  letters.map(function(letter, index) {
    note_map[letter] = notes[index];
    note_map[letter.toUpperCase()] = notes[index];
  });

  return note_map;
}

const note_map = generateNoteMap();
$("h1#title").text("done");
var startTime = Date.now();
var recording = "";


function genRGB() {
  var rgb = new Array(3);
  for (var i = 0; i < 3; i++) {
    rgb[i] = Math.floor(Math.random() * 255);
  }

  return rgb;
}

function synart(note, recording) {
  // Play note
  $("h1#title").text(note_map[note]);
  playTone(note_map[note]);

  // Draw
  var colour = genRGB();
  document.getElementById('song').style.color = "rgb(" + colour.toString() + ")";
  // draw(colour);

  // Update recording
  var time = Date.now() - startTime;
  recording = updateRecording(note_map[note], time, recording);
  console.log(recording);

  return recording;
}

recording = "";

$(document).keypress(function(event) {
  if (playing) {
    var note = event.key
    var song = document.getElementById('song').textContent;
    song += " " + note;
    $("#song").text(song);

    if (note == '1') {
      //start timer
      startTime = Date.now();
    } else if (note == '2') {
      saveTextAsFile(recording);
    } else if (note in note_map) {
      recording = synart(note, recording);
    }
  }
});


// ================ EXPORTING FUNCTIONS ====================
function exportRecording() {
  saveTextAsFile(recording);
}
