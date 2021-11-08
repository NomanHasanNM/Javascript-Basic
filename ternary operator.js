****ternary operator***

var number  = Number(prompt("Enter a number "));
var result = number>0 ? "positive": number <0 ? "Negative" : "Zero";
console.log(result);

var number  = Number(prompt("Enter a number "));
var result = number>50 ? "Big": number <0 ? "Small" : "Zero";
console.log(result);



// Creating a function:-//


function square(num1, num2)
{
    var result = num1 * num2;
    return result;    
}
function addition(num1, num2)
{
    var addition = num1 + num2;
    return addition; 
}

function subtraction(num1, num2)
{
    var subtraction = num1 - num2;
    return subtraction; 
}
function multipulation(num1, num2)
{
    var multipulation = num1 * num2;
    return multipulation; 
}
function division(num1, num2)
{
    var division = num1 / num2;
    return division; 
}

 var noman = square(10,20);
 
 var hasan = addition(10,20);
 
 var shohag = subtraction(10,20);
 
 var babu = multipulation(10,20);
 var nomanhasan = division(10,20);

document.write(" **Square result is =" +noman  + "<br/>");
document.write(" **Addition result is =" +hasan + "<br/>");
document.write(" **Subtraction result is =" +shohag + "<br/>");
document.write(" **Multipulation result is =" +babu + "<br/>");
document.write(" **Division result is =" +nomanhasan + "<br/>");


