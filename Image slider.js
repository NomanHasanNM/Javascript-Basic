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

    <button onclick="prev()"> Previous</button>
    <img src="images1.jpg" alt="" height="300" width="300">
    <button onclick="next()"> Next </button>

           <script src="index.js"></script>
     
   
</body>
</html>



********

//Index.js 


var photos = ["images1.jpg","images2.jpg","images3.jpg" ];
var imgTag = document.querySelector("images");

var count = 0;
function next()
{
    count++;
    if(count<=photos.length){
    count = 0;
    imgTag.src = photos[count];
   }
   else 
   {
       imgTag.src = photos[count];

   }
   
}
  
  function prev()
  {
    count--;
    if(count < 0) {
    count = photos.length -1 ;
    imgTag.src = photos[count];
   }
   else {  
   imgTag.src = photos[count];
  }   
  }
      




