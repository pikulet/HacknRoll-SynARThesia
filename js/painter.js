function randomize_x() {
  return Math.floor(Math.random() * 800) - 50;
}

function randomize_y() {
  return Math.floor(Math.random() * 400) - 50;
}

function getImageSourceFromLetter(letter) {
  var image_file_array = ['one_blob.png'];
  //var note_value = (letters.charCodeAt()%10) ;
  return "IMAGES/" + image_file_array[0];
}

function getXFromLetter(letter) {
  return randomize_x();
}

function getYFromLetter(letter) {
  return randomize_y();
}

function paintSplat(letter, canvas_id) {
  letter = letter.toLowerCase();

  var imgSrc = getImageSourceFromLetter(letter);
  var imgX = getXFromLetter(letter);
  var imgY = getXFromLetter(letter);

  var imageObj = new Image();
  imageObj.onload = function() {
    var context = document.getElementById(canvas_id).getContext('2d');
    context.drawImage(imageObj, imgX, imgY, 137, 137);
  };
  imageObj.src = imgSrc;
}
