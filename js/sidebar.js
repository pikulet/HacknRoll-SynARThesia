var playing = false;
const play_pause_id = 'play-pause';
const play_source = "img/play-button.png";
const pause_source = "img/round-pause-button.png";

function playPause() {
  var img = document.getElementById(play_pause_id);

  if (playing) {
    img.src = play_source;
    playing = false;
  } else {
    img.src = pause_source;
    playing = true;
    startTime = Date.now();
  }
}

function refresh() {
  document.getElementById(play_pause_id).src = play_source;
  playing = false;
  $('#song').text('your song: ');
  recording = "";
}

function settings() {
  $("#test").text('settings');
}

function exportImage() {
  $("#test").text('export');
  saveTextAsFile(recording);
}
