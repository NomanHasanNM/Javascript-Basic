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
  
  <input type="text"   
  <p></p> 
  
   
    <script src="index.js"></script>
</body>
</html>



//////index.js//////



const input = document.querySelector("input");
const p = document.querySelector("p");
input.addEventListener("copy", function()
{
   p.innerText = "You have copied";
});
input.addEventListener("cut", function()
{
   p.innerText = "You have cut";
});

input.addEventListener("paste", function()
{
   p.innerText = "You have paste";
});
