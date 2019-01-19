const note_map = generateNoteMap();
var startTime = null;
var recording = "";
var playing = false;

var firstNotePlayed = false;

var lastPauseStartTime = null;
var lastPauseDuration = 0;
