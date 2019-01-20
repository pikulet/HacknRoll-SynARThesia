const play_pause_id = 'play-pause';
const play_source = "img/play-button.png";
const pause_source = "img/round-pause-button.png";

function playPause() {
  var img = document.getElementById(play_pause_id);

  if (playing) {
    lastPauseStartTime = Date.now();
    img.src = play_source;
    playing = false;
  } else {
    lastPauseDuration = firstNotePlayed ? Date.now() - lastPauseStartTime : 0;
    img.src = pause_source;
    playing = true;
  }
}

function refresh() {
  recording = "";
  playing = false;
  firstNotePlayed = false;

  clearCanvas();
  
  $('#song').text('your song: ');
  document.getElementById('song').style.color = "black";
}

function importRecording() {
  $("#test").text('import');
}

function exportRecording() {
  saveTextAsFile(recording);
}
