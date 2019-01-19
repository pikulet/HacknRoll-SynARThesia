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

function playNote(keycode) {
	// insert algo here
}
function draw(rbgArray) {
	//
}


function genRGB() {
	var rgb = new Array(3);
	for (var i = 0; i < 3; i++) {
		rgb[i] = Math.floor(Math.random() * 255);
		console.log(rgb[i]);
	}

	return rgb;
}

function synart(keycode) {
  // note_map[note]

  var colour = genRGB();
  draw(colour);
  playNote(keycode);

  return colour;
}




$(document).keypress(function(event) {
  var note = event.key
  var song = document.getElementById('song').textContent;
  song += " " + note;
  $("#song").text(song);

  synart(note);
});
