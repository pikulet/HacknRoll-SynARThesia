const canvas_id = "canvas-id";

function randomize_value(scale,transpose) {
  return Math.floor(Math.random() * scale) - transpose;
}


function getImageSourceFromLetterAndTime(letter, time) {
  //something is wrong with and one_vine
  var image_file_array = ['bellpepperline_green.png','bellpepperline_red.png','bellpepperline_yellow.png','bellpepperline_blue.png','bellpepperline_purple.png','bellpepperline_white.png','exclaiming_swirl_green.png','exclaiming_swirl_red.png','exclaiming_swirl_yellow.png','exclaiming_swirl_blue.png','exclaiming_swirl_purple.png','exclaiming_swirl_white.png','many_stars_green.png','many_stars_red.png','many_stars_yellow.png','many_stars_blue.png','many_stars_purple.png','many_stars_white.png','line_green.png','line_red.png','line_yellow.png','line_blue.png','line_purple.png','line_white.png','scribble_green.png','scribble_red.png','scribble_yellow.png','scribble_blue.png','scribble_purple.png','scribble_white.png','pencil_scratch_green.png','pencil_scratch_red.png','pencil_scratch_yellow.png','pencil_scratch_blue.png','pencil_scratch_purple.png','pencil_scratch_white.png','swirl_green.png','swirl_red.png','swirl_yellow.png','swirl_blue.png','swirl_purple.png','swirl_white.png','vine_green.png','vine_red.png','vine_yellow.png','vine_blue.png','vine_purple.png','vine_white.png','one_blob_green.png','one_blob_red.png','one_blob_yellow.png','one_blob_blue.png','one_blob_purple.png','one_blob_white.png','one_star_green.png','one_star_red.png','one_star_yellow.png','one_star_blue.png','one_star_purple.png','one_star_white.png'];
  var note_value = (letter.charCodeAt())%10;
  var value = randomize_value(10,4);
  while (value < 0){
    var value = randomize_value(10,4);
  }
  var index = note_value*6+ value;
  return "img/" + image_file_array[index];
}

function getXFromLetterAndTime(letter, time) {
  return randomize_value(150,60);
}

function getYFromLetterAndTime(letter, time) {
  return randomize_value(100,75);
}

function getImageSizeFromLetterAndTime(letter, time) {
  return letter.charCodeAt() * randomize_value(3.5,0);
}

function paintSplat(letter, time) {
  letter = letter.toLowerCase();
  var imgSrc = getImageSourceFromLetterAndTime(letter, time);
  var imgX = getXFromLetterAndTime(letter, time);
  var imgY = getYFromLetterAndTime(letter, time);
  var imgSize = getImageSizeFromLetterAndTime(letter, time);

  var imageObj = new Image();
  imageObj.src = imgSrc;
  imageObj.onload = function() {
    var context = document.getElementById(canvas_id).getContext('2d');
    console.log(imgX);
    console.log(imgY);
    context.drawImage(imageObj, imgX, imgY, imgSize, imgSize);
  };
};

function clearCanvas() {
  var canvas = document.getElementById(canvas_id)
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}
