function genRGB() {
  var rgb = new Array(3);
  for (var i = 0; i < 3; i++) {
    rgb[i] = Math.floor(Math.random() * 255);
  }

  return rgb;
}

// Appends new note played to data string
function updateRecording(note, time, data) {
  data += (note + " " + time + "\n");
  return data;
}

function synart(note, recording) {

  // Update recording
  var time = Date.now() - startTime - lastPauseDuration;

  playTone(note_map[note]);
  paintSplat(note, time);

  var song = document.getElementById('song').textContent;
  song += " " + note;
  $("#song").text(song);
  // Draw
  var colour = genRGB();
  document.getElementById('song').style.color = "rgb(" + colour.toString() + ")";

  return updateRecording(note_map[note], time, recording);
}
