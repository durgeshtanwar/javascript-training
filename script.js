"use strict";

// loop is also an control structure.
// it is a fundamental aspect of any programming language.
// it helpes in doing the repeatative tasks in the program.
// when you go to a gym and you have to do some repetations in exercises.
// console.log("Lifting weights 1");
// console.log("Lifting weights 2");
// console.log("Lifting weights 3");
// console.log("Lifting weights 4");
// console.log("Lifting weights 5");
// console.log("Lifting weights 6");
// console.log("Lifting weights 7");
// console.log("Lifting weights 8");
// console.log("Lifting weights 9");
// console.log("Lifting weights 10");

// in the above example we see that in a gym we have to repeat some exercise 10 times so we have to do this like that.

// for (let x = 15; x>=1; x--) {
//   console.log("Lifting Weight " + x);
// }

// for loop
// for loop syntax
// loop will keep repeating itself untill the loop condition is applied.
// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetion number ${i}`);
// }

// Looping through array.
//
let loopArray = new Array(
  "Science",
  "Arts",
  "Mathematics",
  "Social Science",
  "Hindi",
  "English",
  "Computers"
);
// console.log(loopArray);

// for (let subject = 0; subject <= loopArray.length - 1; subject++) {
//   console.log(`subjects available is ${loopArray[subject]}`);
// }

let students = ["Rahul", "Raj", "Prem", "Ravi", "Sourav", "Gaurav"];
let names = [];
for (let student = 0; student <= students.length - 1; student++) {
  names.push(students[student]);
}
// console.log("names " + names);
let subject = 0;
while (subject <= loopArray.length) {
  console.log(`vishay available is ${loopArray[subject]}`);
  subject++;
}

var text = "";
var i = 0;
do {
  text += "The number is " + i;
  // console.log(text);
  i++;
} while (i < 5);

for (let x = 1; x <= 100; x++) {
  if (x % 3 == 0) {
    console.log(x);
  }
}

// breaking the loop
// this will end the loop if desired result is obtained.
// we will use continue if we need to skip some steps.
let find;
for (let subjects = 0; subjects <= loopArray.length - 1; subjects++) {
  if (loopArray[subjects] == "English") {
    find = loopArray.indexOf("English");
    // continue;
  }
}
console.log(find);

for (let y = 1; y <= 100; y++) {
  if (y % 5 == 0) {
    continue;
    // break;
  }
  console.log(y);
}
