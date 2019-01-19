const note_map = generateNoteMap();

var recording = "";
var playing = false;
var firstNotePlayed = false;

var startTime;
var lastPauseStartTime;
var lastPauseDuration;
