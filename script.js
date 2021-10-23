// Comparision operators (difference between == and ===)
let age = '18';


// strict comparision operator is === and loose is ===
// loose comparision 18=='18'; this is correct in loose comparision 
// strict comparision 18 === '18'; it is wrong because both data type of the value is different

// if(age==='18'){
//     console.log('user is adult (strict mode)');
// }
// else if(age==18) {
//     console.log('user is adult(loose mode)');
// }

// let favourite =  prompt('What is your favourite Number?');
// console.log(typeof favourite);

// if(favourite===55){
//     console.log('its 55');
// }
// else {
//     console.log('its not 55')
// }

// let number = prompt('please enter the number');
// if(number%2===0){
//     alert(' the number is even');
// }
// else if(number%2!==0) {
//     alert("Number is Odd!");
// }
// else {
//     alert('please insert valid number');
// }

// * Logical Operators. 
let has_driverlicence = true;
let has_goodVision = false;
console.log(has_driverlicence && has_goodVision);
// console.log(has_driverlicence || has_goodVision);

//console.log(!has_driverlicence);
if(!has_driverlicence){
    console.log('user do not have a driver licence');
}

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
// else {
//     alert("numbers are invalid or equal");
// }

// if(a>b){
//     if(b>c){
//         console.log('b is second biggest number');
//     }
// }