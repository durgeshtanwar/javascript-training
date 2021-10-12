// Operators
//  arithmetic Operators
//*  addition (+) operators
//let a = 5;
//let b = 10;
//console.log(a+b);


//* Subtraction (-) operators

//let firstNumber = 10;
//let secondNumber = 15;

// console.log(secondNumber - firstNumber);
//* Multiplication (*) operators

//console.log('multiplication = '+a*b);
// * division  
//console.log('division = ' + b/a);
// * Modulus Operator 
// ? this modulus operator gets the result we get the remaining of the given division.
// ? example of positive divident
 // console.log ("modulus operator " + -12 % 5);
// ? 1 % -2 = 1
// ? 1 % 2  =  1
// ? 2 % 3  =  2
// ? 5.5 % 2 = 1.5


//! example of negetive divident
//? -12 % 5 // -2 
//? -1 % 2  // -1
//? -4 % 2  // -0

//* Exponentiation Operator (**) 
// ? this operator gets the power of the value for example when we say 2's power 2 is 4 or 2's power 3 is 8
console.log('** operator 12 ki power 2 = '+12**2); 

// * Increment (++) and decrement (--) operator
// ? this operator adds one to the value
//todo example of increment

let firstVal = 10;
// console.log(firstVal++);
//  console.log(firstVal);

//  console.log(++firstVal);

// todo example of the decrement operator

// console.log(firstVal--);
// console.log(firstVal);
// console.log(--firstVal);

//! String Operators
//* Concatenation in javascript also happens with + operators
// let firstName = "Nandini";
// let lastName = "Sankhla";

// console.log(firstName + lastName);
//  console.log(firstName + ' ' + lastName);

// let x1 = 5 + 5;
// let y = "5" + 5;
// let z = "Hello" + 5;

// console.log(x1,y,z);


//* assignment Operators
// ? assignment operators assign value to variables
// ? they are of different types
// todo first one is = (equal)

// examples 
 let a = 7;
let b = a;

// ? += 
console.log(a += b) //? it is same as a = a + b;
console.log('value of a = '+a);
console.log('value of b = '+b);
// -=
console.log(a -= b); //? it is same as a = a - b;
console.log('value of a = '+a);
console.log('value of b = '+b)
// todo *=
console.log(a*=b); //? same as a = a * b;
console.log('value of a = '+a);
console.log('value of b = '+b)
// todo /=
console.log(a/=b); //? same as a = a / b;
console.log('value of a = '+a);
console.log('value of b = '+b)
// todo %= //
console.log(a%=b); //? same as a = a % b;
console.log('value of a = '+a);
console.log('value of b = '+b)
// todo **=
console.log(a**=b); //? same as a = a**b;
console.log('value of a = '+a);
console.log('value of b = '+b)
// let x = 10;
// x += 5;
// * JavaScript Comparison Operators

// * ==	equal to
// * ===	equal value and equal type
//* !=	not equal
//* !==	not equal value or not equal type
//* >	greater than
//* <	less than
//* >=	greater than or equal to
//* <=	less than or equal to
let x=5;
// ==	equal to	x == 8	false
// console.log(5=="5");
// console.log(5==="5");	
// x == 5	true	
// x == "5"	true	
// ===	equal value and equal type	x === 5	true	
// x === "5"	false	
// !=	not equal	x != 8	true !==
// !==	not equal value or not equal type	x !== 5	false	
// x !== "5"	true	
// x !== 8	true	
// >	greater than	x > 8	false	
// <	less than	x < 8	true	
// console.log(x>=6);
// >=	greater than or equal to	x >= 8	false	
// <=	less than or equal to	x <= 8	true

// todo Javascript Logical operators

//* && Logical and not
//* || logical or
//* ! logical not

let a1 = 4;
let b1 = 7;
// And (&&) Logical operator
if(a1>2 && b1>8 ){
    console.log(true);
}
else{
    console.log(false)
}

if(a1>2 && b1>6 ){
    console.log(true);
}
else{
    console.log(false)
}

// Or Operator
if(a1<2 || b1>8 ){
    console.log(true);
}
else{
    console.log(false)
}

if(a1>2 || b1>6 ){
    console.log(true);
}
else{
    console.log(false)
}



// todo JavaScript Type Operators
// typeof (Returns the type of a variable)
// instanceof (Returns true if an object is an instance of an object type)

// Conditional Operators (Ternary Operators)
let age= 26;
//  variablename = (condition) ? value1:value2 
let voteable = (age >= 18) ? 'he can vote' : 'He can not vote';
console.log(voteable);
// Conditional Operator 
