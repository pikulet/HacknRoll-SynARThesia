
function randomize_x(){
   return Math.floor(Math.random() * 800) - 50;
}

function randomize_y(){
   return Math.floor(Math.random() * 400) - 50;
}

function paintSplat(letters,canvas) {
    letters = letters.toLowerCase();
    var image_file_array = ['one_blob.png'];
    //var note_value = (letters.charCodeAt()%10) ;
    var image_source = "IMAGES/" + image_file_array[0];
    var canvas = document.getElementById(canvas);
    var context = canvas.getContext('2d');
    var imageObj = new Image();
    var x = randomize_x();
    var y = randomize_y();
    imageObj.onload = function() {
      context.drawImage(imageObj,x,y, 137, 137);
    };
  imageObj.src = image_source;
}
