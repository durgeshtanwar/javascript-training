'use strict';

// loop is also an control structure. 
// it is a fundamental aspect of any programming language.
// it helpes in doing the repeatative tasks in the program.
// when you go to a gym and you have to do some repetations in exercises.
// console.log('Lifting weights 1');
// console.log('Lifting weights 2');
// console.log('Lifting weights 3');
// console.log('Lifting weights 4');
// console.log('Lifting weights 5');
// console.log('Lifting weights 6');
// console.log('Lifting weights 7');
// console.log('Lifting weights 8');
// console.log('Lifting weights 9');
// console.log('Lifting weights 10');

// in the above example we see that in a gym we have to repeat some exercise 10 times so we have to do this like that.

// for loop
// for loop syntax
// loop will keep repeating itself untill the loop condition is applied.
for(let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetion number ${i}`);
}

// Looping through array.
// 
let loopArray = new Array('Science','Arts','Mathematics','Social Science','Hindi','English','Computers');
console.log(loopArray);

for(let subject=0; subject <= loopArray.length -1; subject++) {
    console.log(`subjects available is ${loopArray[subject]}`);
}

// breaking the loop 
// this will end the loop if desired result is obtained.
// we will use continue if we need to skip some steps.
for(let subjects=0; subjects <= loopArray.length -1; subjects++) {
   
    if(loopArray[subjects]=='English'){
        // break;
        continue;
    }
    console.log(loopArray[subjects]);
}

