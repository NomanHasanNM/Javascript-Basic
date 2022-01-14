function addNumbers(x,y,z,e,f)
{
    return x + y + z + e + f;
}
let numbers = [1,2,3]
console.log(addNumbers(...numbers))

let numbers1 = [5, ...numbers,6]
console.log(numbers1);

let numbers1 = [1,2,3,4,5]
let numbers2 = [6,7,8,9, 10]
let numbers = [...numbers1, ... numbers2];
console.log(numbers);


******Object ****


function addNumbers(m1,m2)
 {
     return m1,m2;
 }

let m1 = 
{
    name : "Noman Hasan",
    age : 30,
    Birthdate: 10-12-1998
     
}
let m2 = {
    nationality: 'Bangladesh',
    occupation: 'Student',
    
}
let m  = {...m1, ...m2}
console.log(m);