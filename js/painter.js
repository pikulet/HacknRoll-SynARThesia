const canvas_id = "canvas-id";

function randomize_x() {
  return Math.floor(Math.random() * 800) - 50;
}

function randomize_y() {
  return Math.floor(Math.random() * 400) - 50;
}

function getImageSourceFromLetterAndTime(letter, time) {
  var image_file_array = ['one_blob.png'];
  //var note_value = (letters.charCodeAt()%10) ;
  return "IMAGES/" + image_file_array[0];
}

function getXFromLetterAndTime(letter, time) {
  return randomize_x();
}

function getYFromLetterAndTime(letter, time) {
  return randomize_y();
}

function getImageSizeFromLetterAndTime(letter, time) {
  return 137;
}

function paintSplat(letter, time) {
  letter = letter.toLowerCase();

  var imgSrc = getImageSourceFromLetterAndTime(letter, time);
  var imgX = getXFromLetterAndTime(letter, time);
  var imgY = getYFromLetterAndTime(letter, time);
  var imgSize = getImageSizeFromLetterAndTime(letter, time);

  var imageObj = new Image();
  imageObj.onload = function() {
    var context = document.getElementById(canvas_id).getContext('2d');
    context.drawImage(imageObj, imgX, imgY, 137, imgSize);
  };
  imageObj.src = imgSrc;
}

function clearCanvas() {
  var canvas = document.getElementById(canvas_id)
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}
