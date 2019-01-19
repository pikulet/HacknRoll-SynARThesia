const note_map = generateNoteMap();
$("h1#title").text("done");
var startTime = Date.now();
var recording = "";

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
