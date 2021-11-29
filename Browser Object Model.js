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
   <h1> BOM </h1>
   <div class="location-div">
     <p></p>  
     <p></p>  
     <p></p>  
     <p></p>  
     <p></p>  


</div>
  
 </div>
    <script src="index.js"></script>
</body>
</html>



///////////Index.js//////////

//href
//console.log(location.href);
// protocol
//console.clear();
//console.log(location.protocol);
// hostname
//console.log(location.hostname)
// port
//console.log(location.port);
 // pathname
 //console.log(location.pathname)

 let locationDiv = document.querySelector('location-div');
 p1.textContent  = location.href;

 let p2 = locationDiv.children[0];
 p2.textContent = location.protocol;

 let p3 = locationDiv.children[0];
 p3.textContent = location.hostname;

 let p4 = locationDiv.children[0];
 p4.textContent = location.host;

 let p5 = locationDiv.children[0];
 p5.textContent = location.pathname;

 const visitbuttom = document.getElementById(' visit-buttom' );
  visitbuttom.addEventListener('click', function()
  {
      location.assign("https://nomanhasan.blogspot.com/");
  });