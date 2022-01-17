var students = [
{

    id: 182-15-2172,
    name: 'Noman Hasan',
    gpa: 3.10

},
{
    id:192-18-2981,
    name: 'Mhmud',
    gpa: 2.68

},
{

   id: 19-15-2000,
   name: 'Shohag Hasan',
   gpa: 4.00
},
{
    id: 182-15-2000,
    name: 'Chamok',
    gpa: 3.50
},
]
////// Traditional function  /////
function studentNames1()
{
    return students.filter(function(x)
    {
         return x.gpa > 3
    }).map(function(y){
        return y.name;
     });
}


///// Arrow function/////////
const studentNames2 = () => students.filter((x) => x.gpa > 3).map((y) => y.name);
console.log(studentNames2()) 

console.log(studentNames1);


