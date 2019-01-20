// ================ IMPORTING FUNCTIONS ====================
function openAndPlayFile(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function() {
    var text = reader.result;
    playFile(text);
  };
  reader.readAsText(input.files[0]);

}

function playFile(text) {
  var notes = text.split('\n');
  for (var i = 0; i < notes.length; i++) {
    var note = notes[i].split(' ')[0];
    var time = notes[i].split(' ')[1];
    console.log(note, time);

    setTimeout((note) => synartForImport(note), time, note);
  }
}

function synartForImport(note) {
  var time = Date.now() - startTime - lastPauseDuration;

  playTone(note);
  paintSplat(note, time);

  var song = document.getElementById('song').textContent;
  song += " " + note;
  $("#song").text(song);

  var colour = genRGB();
  document.getElementById('song').style.color = "rgb(" + colour.toString() + ")";
}


// ================ EXPORTING FUNCTIONS ====================
function exportData() {
  exportRecordingAsText(recording);
  exportImageAsPng();
}

function exportImageAsPng() {
  var MIME_TYPE = "image/png";
  var imgURL = document.getElementById("canvas-id").toDataURL(MIME_TYPE);
  automaticallyDownload(imgURL, "mySynArt");
}

function exportRecordingAsText(data) {
  var textFileAsBlob = new Blob([data], {
    type: 'text/plain'
  });
  var textURL = window.URL.createObjectURL(textFileAsBlob);

  automaticallyDownload(textURL, "mySynArtText");
}

function automaticallyDownload(url, fileNameToSaveAs) {
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";

  if (window.URL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = url;
  } else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = url;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}
