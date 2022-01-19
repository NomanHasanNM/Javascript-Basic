// callback and higher order function

function square(c)
{
    console.log(`The square is ${c}: ${c * c} `);
}
//  const y = sqaure;
//  y(6);
 function higherOrderFunction(number, callback)
 {
       callback(number);
 }
 higherOrderFunction(9, square)


//////Callback///////


const firstwork = (callback) =>
{
    console.log("My first Homework");
    callback();

}
const myhomeworkLoading = (callback) =>
{
    console.log("Homework.myhomeworkloading");
     callback();
}
const secondwork = (callback) =>
{
    setTimeout(() => {
        console.log("SecondWork.My Second Homework");
    
    callback();
   },3000);
    
};
const thirdwork = (callback) =>
{
    console.log("My third Homework");
    callback();
}
const fourthwork = (callback) =>
{
    console.log("My fourth Home Work");
    callback();
}

const fivework = (callback) =>
{
    console.log("My five Home work");
    callback();
}

firstwork(() =>{
    secondwork(() =>{
        thirdwork(() => {
            fourthwork(() => {
                fivework();
            });
        });        
        });
});





