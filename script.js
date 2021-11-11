'use strict';

//* Arrays 
// if you want to save your friends name in a variable how will you do it?
// you may do like this.
let friend1 = "Vinayak";
let friend2 = "Giriraj";
let friend3 = "Ritesh";

// array is like a big container where we can put multiple values.

// const friends = ['Vinayak','Shyam','Gaurav'];

// console.log(friends);

// const years = new Array(1991,2020,1985,1988);
//console.log(years);

// if we want to print the elements of the array. (retrive the elements)

// console.log(friends[0]);
// console.log(years[2]);

// size of the array

// console.log(friends.length);
// console.log(friends[friends.length-1]);
// console.log(`Hello ${friends[2]}`);

// replace value in the array,
// friends[2] = "Durgesh";
// console.log(friends);

// we can not replace whole array due to the const declaration.
//  In array we can have more then one type of data structures.
// ! example:

const durgesh = ['Durgesh','Tanwar',2021-1989, 'Murlidhar vyas nagar'];
const firstName = "Durgesh";
 const durgesh1 = [firstName,'Tanwar',2021-1989, 'Murlidhar vyas nagar'];
console.log(durgesh1.length);

// 
const calcAge = function(birthYear){
    return 2021 - birthYear;
}
const years = [1990,2005,2009,1989,2004,2002];

console.log(calcAge(years[0]));
console.log(calcAge(years[years.length - 1]));

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[2])];
console.log(ages);

// Basic Array Operations

const friends = ['Vinayak','Shyam','Gaurav'];
// first method is push. Push adds elements in the array.
// const NewL = friends.push('Nanu');
// push function returns the new array length 
// console.log(NewL);


//  add in the front of the array.
friends.unshift('Tejesh');
console.log(friends);

// Remove elements operations
friends.pop();
const popped = friends.pop();
// it will remove the last element and it will return the removed item.
console.log(friends,popped);

// if we want to remove the first element we have to use the shift method.
const shifted = friends.shift();
console.log(friends);

console.log(friends.indexOf('Vinayak'));
friends.push(26);
friends.push("Ramesh","Suresh");
console.log(friends.includes(26));
console.log(friends);
if(friends.includes("Ramesh")){
    console.log("Ramesh is there in your friends");
}
