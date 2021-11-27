const form = document.querySelector("form");
const name = form.querySelector("#div name");
const email = form.querySelector("#div email");
const password = form.querySelector("#div password");

form.addEventListener("submit", formHandler);

function formHandler(e) 
{
    e.preventDefult();
  
    const userInfor =
    {
        name:name.value,
        email :email.value,
        passworda:password.value,
    };
    console.log(userInfor)
    name.value ="";
    email,value="";
    password.value="";
}
