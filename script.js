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

// todo return keyword
// ? return keyword returns the value on which further logic can be applied.
// todo arguments and parameter

// we can pass the values to the function and do something with this.
function addition (x,y) {
    return x+y;
}

let sq =  addition(54,55);
// console.log(addition(54,89));
// console.log(addition(587,985));
// console.log(addition(335,874));

// think function of like a machine where you give raw material (inputs) and get the finished goods()
// todo 
// write a function to get the square of the number

function square(num){
    return num**2;
}
// console.log(square(22));
// console.log(square(98));

// we can store the function result into the variable too.
let x = square(5);
console.log(x);
let volume = 0;
function tvVolumeUp(){
return volume++;
}
tvVolumeUp();
tvVolumeUp();
tvVolumeUp();
tvVolumeUp();
// console.log(volume);

function tvVolumeDown(){
   if(volume!== 0) {
     return volume--;
   }
   else {
       volume = 0;
   }
}
tvVolumeDown();
console.log(`volume is ${volume}`);
tvVolumeDown();
console.log(`volume is ${volume}`);
tvVolumeDown();
console.log(`volume is ${volume}`);
tvVolumeUp();
console.log(`volume is ${volume}`);
tvVolumeUp();
console.log(`volume is ${volume}`);


tvVolumeUp();
console.log(`volume is ${volume}`);

// example of the functions below

// function declaration
// function to calculate age of the volume
function calcAge1(birthYear){
    return 2021 - birthYear;
}

console.log(calcAge1(1988));
// parameter is the placeholder and argument is the actual value;

// function expression 

const calcAge2 = function(birthYear){
    return 2037-birthYear;
}
console.log(calcAge2(1954));

// difference between expression and declaration is we can call declared function before the function is declared but we can not in expression.
// * Arrow Function

// added in es6 a faster and shorter method to write a function.

const by = (year) => { return 2022-year }
const birthYear = (year) => {2021 - 2000};
//  if there is only one line that is just return we can further shorten this.
const birtYear = year => 2021 - year; 

//  function tvDown(){
//     if(volume!== 0) {
//         return volume--;
//       }
//       else {
//           volume = 0;
//       }
//    }

 const tvDown = () => { 
     if(volume!==0){
         return volume--
     }
     else {
         volume = 0;
     }
 }  

 tvDown();
 tvDown();
 tvDown();
 tvDown();
 tvDown();
 console.log(volume);

 const tvUp = () =>{ 
     if(volume !== 100){
         return volume++;
     }
 }

 tvUp();
 tvUp();
 tvUp();
 tvUp();
 tvUp();

 console.log(volume);

//  function to calculate years untill retirement.

const yearUntillRetirement = birthYear => { 
    const age = 2021-birthYear;
    const retirement = 60 - age;
    return retirement;
}
console.log(yearUntillRetirement(1996));

const yearUntillClass12 = (year,firstName) => {
    const year_untill12 =  12 - year;
    return `Hi ${firstName} you have still ${year_untill12} left`;
}

// what functions should I use?

// FOr now we will use traditional functions we will talk about them again in future.

// Calling functions inside function.
// we have to manufacture a car and we have car assembly unit in which
// there are many parts are required.
function car(tirecompany,pattern , headlightType){
  let tire = tires(tirecompany,pattern);
  let head = headlights(headlightType);
    return `finished car with ${tire} pattern and headlights are ${head} type`;
}

function tires(company, patterns){
return `${company} and ${patterns}`;
}

function headlights(type){
return `${type}`
}

console.log(car('mrf','striped','laser'));