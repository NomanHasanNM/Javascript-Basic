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
  <input type="text">
  
   
    <script src="index.js"></script>
</body>
</html>



///////////index.js/////////////

const input = document.querySelector("input");
input.addEventListener("blur", function()
{
   input.style.backgroundColor =  "red"
   input.style.padding = "5";
   input.value = e.target.value.toUpperCase();
});


input.addEventListener("orange", function()
{
   input.style.backgroundColor =  "red";
   input.style.padding = "2rem";
});

input.addEventListener("focusin", function()

{
    console.log("focusin is important");
});

input.addEventListener("focusout", function()

{
    console.log("focusout in is important");
});