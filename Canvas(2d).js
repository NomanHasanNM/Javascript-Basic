<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=
    
    initial-scale=1.0">  


    <title>Document</title>
</head>
<body>
  <canvas id="myCanvas" width="400px" height="300px"></canvas>
    
           <script src="index.js"></script>
     
   
</body>
</html>




********JS *************

var c = document.getElementById("myCanvas");
var ctx  = c.getContext("2d");
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.strokeRect(10,10,380,280);
ctx.fillStyle = "green";
ctx.fillRect(12,12,376,276);
var centerX = c.width / 2;
var centerY = c.height / 2;
ctx.beginPath();
ctx.arc(centerX, centerY,80,0,2*Math.PI,false);
ctx.fillStyle = "red";
ctx.fill();
ctx.strokeStyle("pink");