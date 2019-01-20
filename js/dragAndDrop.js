function allowDrop(ev) {
  ev.preventDefault();
}

function filedrop(ev) {
  ev.preventDefault();

  var files = ev.dataTransfer.files;
  for (var i = 0, file; file = files[i]; i++) {
    openFile(file);
  }
}

function openFile(file) {
  var reader = new FileReader();
  
  reader.onload = function() {
    var text = reader.result;
    console.log(text);
    playFile(text);
  };
  reader.readAsText(file);
}
