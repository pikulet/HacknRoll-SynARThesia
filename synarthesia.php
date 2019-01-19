<?php
$dir = "IMAGES";
$image_file_src_array = scandir($dir);
array_splice($image_file_src_array, 0, 2);
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title> SynARThesia 🎨 </title>

  <link rel="icon" href="img/favicon.png">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/canvas.css">
  <!-- <link rel="stylesheet" href="css/buttons.css"> -->

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
  <script src="js/keypress_detect.js"></script>
  <script src="js/sidebar.js"></script>
  <script src="js/simpleTones.js"></script>
  <script src="js/importExport.js"></script>

</head>

<body>
  <div class="jumbotron">
    <h1>SynARThesia</h1>
    <p>At the crossroads of art and technology lies the explosive creativity of synthesia.</p>
  </div>
  <canvas id="myCanvas" width="1000" height="350" style="border:1px solid	#D3D3D3;"></canvas>
  <div>
    <script>
    function get_paint_splat(letters,canvas) {
        var image_file_array = <?php echo json_encode($image_file_src_array); ?>;
        letters = letters.toLowerCase();
        var note_value = (letters.charCodeAt() -97) ;
        var image_source = "IMAGES/" + image_file_array[note_value];
        var canvas = document.getElementById(canvas);
        var context = canvas.getContext('2d');
        var imageObj = new Image();
        imageObj.onload = function() {
          context.drawImage(imageObj, 0, 0, 137, 137);
        };
      imageObj.src = image_source;
    }
    get_paint_splat('a', 'myCanvas');
    </script>
  </div>
  <table>
    <tr>
      <td id=canvas>
        <canvas id='canvas_id'></canvas>
      </td>
      <td class="sidebar">
      	<input type='file' accept='text/plain' onchange='openAndPlayFile(event)'>
        <img id="play-pause" src="img/play-button.png" alt="play or pause" onclick="playPause();">
        <img src="img/refresh-button.png" alt="refresh" onclick="refresh();">
        <img src="img/setting-button.png" alt="settings" onclick="settings();">
        <img src="img/export-button.png" alt="export song" onclick="exportImage();">
      </td>
    </tr>
  </table>

  <h1 id="song">your song: </h1>
  <h1 id="test"> </h1>
</body>

</html>
