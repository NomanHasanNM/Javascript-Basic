var names = ["Anis", "Rabeya", "Kolpona","moni","noman"];
console.log(names);

// shift opposite of pop
names.shift();
console.log(names);

// unshift opposite of push

names.unshift("monir");
console.log(names);



// element adding 


names.splice(2,0,"karim", "Rahim");
console.log(names);


// element removing*******

names.splice(1,2);
console.log(names);

//slices

 var newArray = names.slice(1);
 console.log(newArray);

 // sorted array in this element***

 var sortednames = names.sort();
 console.log(sortednames);

 //  reverse orted array in this element***

 var sortednames = names.sort();
 names.reverse();
 console.log(sortednames);

 // number of sorted in the array**

var numbers = [20,30,40,59,49];
numbers.sort(function(a,b)
{
    return a-b;
});
console.log(numbers);

// reverse number of sorted in the array**

var numbers = [20,30,40,59,49];
numbers.sort(function(a,b)
{
    return a-b;
});
console.log(numbers);



