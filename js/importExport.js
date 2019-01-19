// ================ IMPORTING FUNCTIONS ====================
function openAndPlayFile(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function() {
    var text = reader.result;
    // console.log(reader.result);
    playFile(text);
  };
  reader.readAsText(input.files[0]);

}

function playFile(text) {
  var notes = text.split('\n');
  for (var i = 0; i < notes.length; i++) {
    var note = notes[i].split(' ')[0];
    var time = notes[i].split(' ')[1];

    setTimeout((note) => playTone(note), time, note);
  }
}

// ================ EXPORTING FUNCTIONS ====================
function exportData() {
  saveTextAsFile(recording);
  exportImageAsPng();
}

function exportImageAsPng() {
  var MIME_TYPE = "image/png";
  var FILENAME = "mySynArt.png";

  var imgURL = document.getElementById("canvas-id").toDataURL(MIME_TYPE);
  var dlLink = document.createElement('a');
  dlLink.href = imgURL;
  dlLink.download = FILENAME;
  dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

  document.body.appendChild(dlLink);
  dlLink.click();
  document.body.removeChild(dlLink);
}

//appends new note played to data string
function updateRecording(note, time, data) {
  data += (note + " " + time + "\n");
  return data
}

function saveTextAsFile(data) {
  var textToWrite = data;
  var textFileAsBlob = new Blob([textToWrite], {
    type: 'text/plain'
  });
  var fileNameToSaveAs = "test";
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}
