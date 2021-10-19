//* Type Conversion and type coersions
// Some times we may be in the situation where we need to change the data type of the value.
// for example suppose we want to take birth year as the value from the input box. this input will take value as a string.
// if we want to add value to this input it will be a weird value.

//? let birthYear = '1990';
// Here we see that birth year have a value of string now if we want to add 18 to this number to see when the user will be 18 years old.
// so what we do is add 18 to this number.
//? console.log(birthYear+18);
// instead of adding 18 to birthYear value it will concatenate the value.
// So what is the solution ? solution is to use type conversions
// we use Number() function to convert string into number.
//?console.log(Number(birthYear), birthYear);
// So if we have to add the 18 into the birthYear we will do it as below.
//?console.log(Number(birthYear) + 18);
// we can convert numbers to string too.
//? console.log(String(2009));
// NaN - Not a Number
// if we try to convert non numbers to the Number we get the following output.
//? console.log(Number('Raj'));
//? console.log(typeof(NaN));

// * Type Coersional
// Javascript also converts the values data types automatically under the hood. let's see how it is done.

//? console.log('Shyamlal is ' + 20 + ' Years Old');
//? console.log('200' - 142); //? Here it converted the string into the number and printed the output.
//? console.log('140'-'14');
//? console.log('12'*12);
//? console.log('12'/'6');

// only + operator converts everything to the string and concatenate the values.
//?  let n = "25";
//?  n=n+1;
//?  console.log(n-10);
//* Truthy and falsy values.
// ! Truthy and falsy values are those who are initially true but when we convert them into the boolean values they converts into false values.
// ? there are five types of falsy values. 
//? 1. 0,
//? 2 " " (empty string);
//? 3 undefined values.
//? 4 NaN.
//? 5 null  

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined)); 
console.log(Boolean(NaN));
console.log(Boolean(null));
// console.log(null);
console.log(Boolean('Durgesh'));


// Practically we never use this type conversion in explicitly. It happens by type coersion 
// Boolean type coersion happens in the logical operators and in logical context.
// example
// let runs = 0;
// if(runs){
//     console.log('Great you made some runs');
// }
// else {
//     console.log('you were out on Zero!');
// }

// THis can also throw an error 
let height = 0;
if(height){
    console.log("you get an height!");
}
else{
    console.log('height is undefined');
}