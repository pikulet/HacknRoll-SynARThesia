function generateNoteMap() {
  var letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ','
  ];
  var notes = [
    // "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
    "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5",
    "C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6",
    "C6", "D6", "E6", "F6", "G6", "A6", "B6", "C7",
  ];

  var note_map = {}
  letters.map(function(letter, index) {
    note_map[letter] = notes[index];
    note_map[letter.toUpperCase()] = notes[index];
  });

  return note_map;
}
