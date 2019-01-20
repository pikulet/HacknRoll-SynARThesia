$(document).keypress(function(event) {
  var note = event.key

  if (playing && note in note_map) {
    if (!firstNotePlayed) {
      firstNotePlayed = true;
      startTime = Date.now();
    }

    var song = document.getElementById('song').textContent;
    song += " " + note;
    $("#song").text(song);

    recording = synart(note, recording);
  }
});
