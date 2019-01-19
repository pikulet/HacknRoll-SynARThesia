function generateNoteMap() {
  var letters = ['a', 's', 'd', 'f', 'h', 'j', 'k', 'l'];
  var num = [1, 2, 3, 4, 5, 6, 7, 8];

  var note_map = {}
  letters.map(function(letter, index) {
    note_map[letter] = num[index];
  });

  return note_map;
}

var note_map = generateNoteMap;

function synart(note) {
  note_map[note]
}

$(document).keypress(function(event) {
  var note = event.key
  var song = document.getElementById('song').textContent;
  song += " " + note;
  $("#song").text(song);

  synart(note);
});
