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

   <textarea name="" id="" cols="30" rows="10">
       
   </textarea>
   
    <script src="index.js"></script>
</body>
</html>



/////////////Index.js ///////////

  const textarea = document.querySelector("textarea");
 textarea.addEventListener("keydown", function(e)
 {
     if(e.repeat){
     alert("do not repeat");
     }
   
 });

textarea.addEventListener("KeyCode", function()
{
  document.write("KeyCode");
});

textarea.addEventListener("Keypress", function(e)
{
  document.write("e.Keypress");
});

textarea.addEventListener("Keyup", function(e)
{
  document.write("e.shiftKey");
  {
      console.log("shift+" + e.key)
  }
});