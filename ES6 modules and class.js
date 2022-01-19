///Index.js//////


import {text, setText } from "./myModule.js"
console.log(text);
setText("goodbye from es6")
console.log(text)

class student {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    set StudentName(name)
    {
       this.name = name;
    }
 
}

let f1 = new student(182,"Noman");
console.log;log(f1.id);
console.log(f1.name);

f1.StudentName = "huhuhuhuh";
console.log(f1.name);



///My Module.js ///////


export let text = "Welcome to module"; 

 export function setText(txt)
 {
     text = txt;
 }