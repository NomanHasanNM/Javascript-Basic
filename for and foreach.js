//for vs foreach 


var numbers  = [10,20,30,40];
for(var x = 0; x < numbers.length; x++)
{
    console.log(numbers[x]);
}



////// foreach

var numbers = [10,20,30,40];
numbers.forEach(function(x)
{
    console.log(x);
})

var numbers = [29,20,38,37,38]
console.log(numbers);
numbers.forEach(function(n, index,arr)
{
    arr[index] = n*10;
    
})

