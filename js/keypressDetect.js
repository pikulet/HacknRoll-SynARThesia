$(document).keypress(function(event) {
  var note = event.key

  if (playing && note in note_map) {
    if (!firstNotePlayed) {
      firstNotePlayed = true;
      startTime = Date.now();
    }

    if (note in note_map) {
      recording = synart(note, recording);
    }
  }
});
