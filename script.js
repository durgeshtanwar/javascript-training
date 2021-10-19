// Comparision operators (difference between == and ===)
let age = 18;
if(age===18) console.log('adult');

// strict comparision operator is === and loose is ===

if(age===18){
    console.log('user is adult (strict mode)');
}
else if(age==18) {
    console.log('user is adult(loose mode)');
}

// let favourite =  prompt('What is your favourite Number?');
//console.log(typeof favourite);

// if(favourite===55){
//     console.log('its 55');
// }
// else {
//     console.log('its not 55')
// }


// * Logical Operators.
let has_driverlicence = true;
let has_goodVision = false;
console.log(has_driverlicence && has_goodVision);
console.log(has_driverlicence || has_goodVision);
console.log(!has_driverlicence);

// write a program to find bigger of three digits;

// let a = Number(prompt('Please enter the first digit'));
// let b = Number(prompt('Please enter the second digit'));
// let c = Number(prompt('Please enter the third digit'));

// if(a>b && a>c){
//     alert(`digit ${a} is biggest amonng three digits`);
// }
// else if(a<b && b>c){
//     alert(`digit ${b} is biggest amonng three digits`);
// }
// else if(a<c && b<c){
//     alert(`digit ${c} is biggest amonng three digits`);
// }

