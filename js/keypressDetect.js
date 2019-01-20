$(document).keypress(function(event) {
  var note = event.key

  if (playing && note in note_map) {
    if (!firstNotePlayed) {
      firstNotePlayed = true;
      startTime = Date.now();
    }

    recording = synart(note, recording);
  }
});
