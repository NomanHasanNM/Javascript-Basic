//**maximum value here ****


var number1 = parseInt(prompt("Enter first number :"));
var number2 = parseInt(prompt("Enter second number :"));
var maximum = Math.max(number1,number2);
console.log(maximum);


//****Date Object and date methods *****

var date = new Date();
console.log(date);
var year = date.getFullYear();
console.log(year);

var month = date.getMonth();
console.log(month);

var currentDate = date.getDate();
console.log(currentDate);

 var currentnSeconds = date.getSeconds();
 console.log(currentnSeconds);

 var currentnHours = date.getHours();
 console.log(currentnHours);

 var currentnday = date.getUTCDay();
 console.log(currentnday);
