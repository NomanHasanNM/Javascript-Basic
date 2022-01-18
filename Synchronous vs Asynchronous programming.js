//Synchronous vs Asynchronous programming

const firstwork = () =>
{
    console.log("My first Homework");

}
const myhomeworkLoading = () =>
{
    console.log("Homework.myhomeworkloading");

}
const secondwork = () =>
{
    setTimeout(myhomeworkLoading, 2000);

}
const thirdwork = () =>
{
    console.log("My third Homework");
}
const fourthwork = () =>
{
    console.log("My fourth Home Work");
}

const fivework = () =>
{
    console.log("My five Home work");
}

firstwork();
secondwork();
thirdwork();
fourthwork();
fivework();
