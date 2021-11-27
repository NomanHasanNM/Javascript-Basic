const input = document.querySelector("input");
input.addEventListener("change", changeHandler);

function changeHandler(event)
{
    //console.log("changed");
    //console.log(event.target);
    //console.log(event.type);
    //console.log(event.target.className);
      //  console.log(event.target.id);  

}


const programs = document.querySelectorAll("input[name=program]");
  console.log(programs);
  Array.from(programs).map(programs) =>
  {
  
     // program.addEventListener("change", programHandler);

  });
  function programHandler(e){
      if(e.target.checked)
      {
          //console.log(e.target.value);
      } 
  }

  const varName = document.querySelector("#department");
  department.addEventListener("change", handledepartment);
  function handledepartment(e)
  {
      console.log("selected");
      //console.log(e.target.value);
  }
