  ************** Html **************


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
  <p> Enter a number between 10 to 30 </p>
    <input type="text" id="numTextfield"/> 
        <button id="checkButton"> check</button>

           <script src="index.js"></script>
     
   
</body>
</html>






*************JS ***************


document.querySelector("#checkButton").addEventListener("click",function(){

    var num = document.querySelector("numTextfield").value;
 
    try{
        if(num < 10)
        {
            throw "Input is too low";
        }
        else(num > 30)
        {
            throw "Input is too High";
        }
    }catch(error){
        console.log(error);
    }
    
 })
 
 
 
 

  




