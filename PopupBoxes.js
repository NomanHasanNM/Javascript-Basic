


//////////////Index.js//////////

////Alert/////


console.log(window);
alert("error this file is here: ")



////////////Confirm/////////


confirm("Are you a stuednt still now??");

function deleteSomething()
{
    confirm("DO you want to delete something? ");
    if(value)
    {
        console.log("deleted");

    }else{
        console.log(" Not deleted");
    }
} 
deleteSomething();


//////////promt///////


function welcomeMessege(){
let h1 = document.createElement("h1");
let text;
{
    let name = prompt("Enter your name");
    if(name == null || name == '')
    {
       text = "No name Found";
    }else{
        text = "Here is my full details and Wlcome my websites : " + name;
    }
    let textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);

}
}
welcomeMessege();