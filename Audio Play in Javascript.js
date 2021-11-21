<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
    
</head>
<body>

    <h> You have not click any button</h><br>


    <button class="myButton"> n </button>
    <button class="myButton"> m </button>
    <button class="myButton"> k </button>
     
    <script src="index.js"></script>
</body>
</html>

///// js code 




for(var  i=0; i < len; i++){
  document.querySelectorAll(".myButton")[i].addEventListener("click", function()
{ 
  var text = this.innerHTML;
  console.log(text);
  audioplay(text); 
function audioplay(text)
{
  switch(text)
  {
    case "a":   
   var audio = new audio("n.mp3");
   audio.play();
   break;

   case "m":   
   var audio = new audio("m.mp3");
   audio.play();
   break;

   case "k":   
   var audio = new audio("k.mp3");
   audio.play();
   break;
  }
}
  
});
}


