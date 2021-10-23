// Comparision operators (difference between == and ===)
// let age = 18;
// if(age===18) console.log('adult');

// // strict comparision operator is === and loose is ===

// if(age===18){
//     console.log('user is adult (strict mode)');
// }
// else if(age==18) {
//     console.log('user is adult(loose mode)');
// }

// let favourite =  prompt('What is your favourite Number?');
//console.log(typeof favourite);

// if(favourite===55){
//     console.log('its 55');
// }
// else {
//     console.log('its not 55')
// }


// * Logical Operators.
// let has_driverlicence = true;
// let has_goodVision = false;
// console.log(has_driverlicence && has_goodVision);
// console.log(has_driverlicence || has_goodVision);
// console.log(!has_driverlicence);

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


// switch case
// switch case is like a switch, for example we have many switches in our home. Fan switch will work for fan and light for light.
// same concept is there for programming as well. we have to define switch condition and then we have to set the cases.

// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

let day;
let value = 4;
// this function will return the day of the week for example sunday is 0 and saturday is 6
switch (value) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    // break;
  case 2:
    day = "Tuesday";
    // break;
  case 3:
    day = "Wednesday";
    break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
default :
console.log('this day is not possible');

}
console.log(day);

let x,y;
x=10; y=15;
let operation = "multiplication";
switch(operation) {
    case 'multiplication':
        console.log(x*y);
        break;
    case 'add' : 
    console.log(x+y);  
    break;  

}




// When JavaScript reaches a break keyword, it breaks out of the switch block.

// This will stop the execution inside the switch block.

// It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

// * Default case

// switch (new Date().getDay()) {
//     case 6:
//       text = "Today is Saturday";
//       break;
//     case 0:
//       text = "Today is Sunday";
//       break;
//     default:
//       text = "Looking forward to the Weekend";
//   }

// * Common Code Blocks


let vaar = "sunda";
switch(vaar) {
    case "monday" :
    case "tuesday" :
    case "wednesday" :
    case "thursday" :
    case "friday" :                
        console.log('working day');
        break;
   case "saturday" :
       case "sunday" :
           console.log('its holiday!');
           break;
 default:
     console.log('invalid day');     
}
    
