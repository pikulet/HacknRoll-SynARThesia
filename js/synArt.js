function genRGB() {
  var rgb = new Array(3);
  for (var i = 0; i < 3; i++) {
    rgb[i] = Math.floor(Math.random() * 255);
  }

  return rgb;
}

function synart(note, recording) {

  // Update recording
  var time = Date.now() - startTime - lastPauseDuration;
  recording = updateRecording(note_map[note], time, recording);

  playTone(note_map[note]);
  paintSplat(note, time);

  // Draw
  var colour = genRGB();
  document.getElementById('song').style.color = "rgb(" + colour.toString() + ")";

  return recording;
}
