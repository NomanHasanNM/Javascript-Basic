<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <link rel="stylesheet" href="style.css">
    
</head>
<body>

   <video width="400" controls muted>
   <source src="java.mp4"
   type="video/mp4">
   your browser does not support html5 video element     
 
   </video>    
    <script src="index.js"></script>
</body>
</html>


///////******media events.js*********


const video = document.querySelector("video");
video.addEventListener("canplay", function()
{
    console.log("canplay")
});

video.addEventListener("play", function()
{
    console.log(play);
});
video.addEventListener("playing", function()
{
    console.log(playing);
});
video.addEventListener("pause", function()
{
    console.log(pause);
});
video.addEventListener("ended", function()
{
    console.log("Thanks for watching");
});
video.addEventListener("valumechange", function()
{
    console.log("valumechange");
});