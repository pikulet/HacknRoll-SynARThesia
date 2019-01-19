var playing = false;
const play_source = "img/play-button.png";
const pause_source = "img/round-pause-button.png";

function playPause() {
  var img = document.getElementById('play-pause');
  if (playing) {
    img.src = play_source;
    playing = false;
  } else {
    img.src = pause_source;
    playing = true;
  }
}

function settings() {
  $("#test").text('settings');
}

function refresh() {
  $("#test").text('refresh');
}

function exportImage() {
  $("#test").text('export');
}
