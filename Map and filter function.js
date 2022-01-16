
// foreach function

var numbers = [3,6,3,6,3,6];
var squareNumbers = [];
numbers.forEach(function(z)
{
    squareNumbers(z*z);
})
console.log(squareNumbers);

/// map function
var numbers = [3,6,3,6,3,6];
var squareNumbers = numbers.map(function(z)
{
   return(z*z);
})
console.log(squareNumbers);


// filter function

var numbers = [29,29,83,80,7,8,19];
var newNumbers = numbers.filter(function(z)
{  return z> 10 ;
  
})
console.log(newNumbers);