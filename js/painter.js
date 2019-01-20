const canvas_id = "canvas-id";

function randomize_value(scale,transpose) {
  return Math.floor(Math.random() * scale) - transpose;
}


function getImageSourceFromLetterAndTime(letter, time) {
  //something is wrong with and one_vine
  var image_file_array = ['one_blob.png','bellpepperline.png','exclaiming_swirl.png','line.png','many_blobs.png','many_stars.png','pencil_scratch.png','one_star.png','swirl.png','one_vine.png'];
  var note_value = (letter.charCodeAt())%10;
  return "IMAGES/" + image_file_array[note_value];
}

function getXFromLetterAndTime(letter, time) {
  return randomize_value(350,50);
}

function getYFromLetterAndTime(letter, time) {
  return randomize_value(450,50);
}

function getImageSizeFromLetterAndTime(letter, time) {
  return letter.charCodeAt() *randomize_value(5,0);
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
    context.drawImage(imageObj, imgX, imgY, imgSize, imgSize);
  };
};

function clearCanvas() {
  var canvas = document.getElementById(canvas_id)
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}
