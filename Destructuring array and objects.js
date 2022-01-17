// Array destruction

let numbers1 = [10,20,30,40,60]
let numbers2 = [48, 49, 49, 40, 90]
let [num1, num2, ...z] = numbers1
let [num6, num7, ...x] = numbers2
console.log(z);
console.log(x);


// swap variables

let a=30, b =34;
[a,b] = [b,a]
console.log(a);
console.log(b);



//  object destructure

const studentInfo = 
{
    id:182-15-2172,
    fullname : 'Noman hasan',
    gpa: 3.50

}
const{id, fullname, gpa} = studentInfo
console.log(id);
console.log(fullname);
console.log(gpa);


//nested object destructure


const studentInfo = 
{
    id:182-15-2172,
    fullname : 'Noman hasan',
    gpa: 3.50,
    fathermother:
    {
        father : 'Nurul',
        mother : 'Monira'
    }

}
const{id, fullname, gpa,fathermother} = studentInfo
console.log(id);
console.log(fullname);
console.log(fathermother.father);
console.log(fathermother.mother);
console.log(gpa);



///destruction function parameters

const studentInfo = ({id, fullname}) =>
{
    console.log(`${id}, ${fullname}`) 
    
}
const student = {
    id: 182-15-2172,
    fullname: "Noman Hasan"
}
studentInfo(student);