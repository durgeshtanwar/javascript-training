'use strict';

// let hasVotersCard = true;
// if(hasVotersCard){
//     console.log('user can vote');
// }
// strict mode also helps us to avoid making variable names to those words which in future javascript may use in their langauge.
// example
// let interface = true;


// * Functions 
// ? Functions are the fundamental building blocks in the javascript. it helps us to write code once and use it again and again without repeating the code itself.
// ? one of the most used javascript feature is functions.
// todo syntax to write the functions are as follows...
//? function functionName(parameters) {
  // ?  code to be executed
//?    }
// todo it is called the declaration of the function.
function myName(){
    console.log('Gaurav Sankhla');
}
// it is called Calling / Invoking / Running
myName();
myName();

// we can pass the values to the function and do something with this.
function addition (x,y) {
    return x+y;
}

console.log(addition(54,89));
console.log(addition(587,985));
console.log(addition(335,874));

// think function of like a machine where you give raw material (inputs) and get the finished goods()

// write a function to get the square of the number

function square(num){
    return num**2;
}
console.log(square(22));
console.log(square(98));

// we can store the function result into the variable too.
let x = square(5);
console.log(x);