function generateNoteMap() {
  var letters = ['a', 's', 'd', 'f', 'h', 'j', 'k', 'l'];
  var notes = ["C", "D", "E", "F", "G", "A", "B", "C4"];

  var note_map = {}
  letters.map(function(letter, index) {
    note_map[letter] = notes[index];
    note_map[letter.toUpperCase()] = notes[index];
  });

  return note_map;
}

var note_map = generateNoteMap();
$("h1#title").text("done");

function synart(note) {
  $("h1#title").text(note_map[note])
  playTone(note_map[note]);
}

$(document).keypress(function(event) {
  var note = event.key
  var song = document.getElementById('song').textContent;
  song += " " + note;
  $("#song").text(song);

  synart(note);
});
