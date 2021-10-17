
// Operator Precedence
/* 
the order in which operators works if there are more then one operators is called operator precedence. 

Operator precedence determines how operators are parsed concerning each other.
Operators with higher precedence become the operands of operators with lower precedence.

*/
let now = 2021;
console.log(now - 1989 > now - 2000 );
// why subtraction happened before the comparision?
// This is made possible because of operator precedence

console.log(3+4*5);
// ? What will be the output of this?

console.log(4 * 3 ** 2); // 4 * 9

// ? what will be output of this?

let a;
let b;

console.log(a = b = 5);
// expected output: 5

// In below example if the operator op2 have higher precedence then op2 will be solved first.
// a OP1 b OP2 c

console.log(3 + 10 * 2);   // logs 23
console.log(3 + (10 * 2)); // logs 23 because parentheses here are superfluous
console.log((3 + 10) * 2); // logs 26 because the parentheses change the order

function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the division operator (/)
console.log(echo("left", 6) / echo("right", 2));

// let mark_mass, john_mass, john_height, mark_height;
// mark_mass = 78;
// mark_height = 1.69;
// john_mass = 92;
// john_height = 1.95;
// let mark_bmi = mark_mass / (mark_height**2);
// console.log ('Mark\'s BMI is ' + mark_bmi);
// let john_bmi = john_mass / (john_height*john_height);
// console.log ('John\'s BMI is ' + john_bmi);


// String literals 
const firstName = "Durgesh";
const lastName = "Tanwar";

console.log(`I am ${firstName} ${lastName} and my age is ${now - 1988}`);
console.log(`Bharat humko jaan se pyara hai 
sabse pyara gulistan hamara hai`);