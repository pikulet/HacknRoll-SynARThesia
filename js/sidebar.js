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
    lastPauseDuration = Date.now() - lastPauseStartTime;
    img.src = pause_source;
    playing = true;
  }
}

function refresh() {
  var startTime = null;
  var recording = "";
  var playing = false;

  var firstNotePlayed = false;

  var lastPauseStartTime = null;
  var lastPauseDuration = 0;

  $('#song').text('your song: ');
}

function importRecording() {
  $("#test").text('import');

}

function exportImage() {
  saveTextAsFile(recording);
}
