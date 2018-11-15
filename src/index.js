// let element = document.createElement('div');
// element.innerHTML = "hello world";
// document.body.appendChild(element);

// const show=content=>{
//     let element = document.createElement('div');
    
//     //const box=document.getElementById("box");
//     element.innerHTML=`你好！${content}`;
//     document.body.appendChild(element);
// }

// show("hhhh");

import {Dog} from "./Dog.js";
class Main {
    constructor() {
        document.write("Hi webpack4 + ES6!");
        console.info("Hi webpack4  + ES6");
        let dog = new Dog();
    }
}
new Main();