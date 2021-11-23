
// Objects
// we were using array data structure to save the values.
// lets recap the array.
const Bio = ['Durgesh','Tanwar',33,'Software Trainer', ['Arvind','Prashant','Niranjan']];

// we cant reference by there name in array. to solve this error we have another datastructure here.
// we call it objects/
const Durgesh = {firstName:'Durgesh', // key also called property
    lastName:'Tanwar',
    age:33,
    profession:'Teacher',
    friends:['Arvind','Prashant','Niranjan']
};

// const name = {
//     firstName:'Gaurav',
//     lastName : 'Sankhla',
//     age:'19'
// }
console.log(Bio);
// Bio[4];

// Objects have key and value pair
// for example in object Durgesh key is firstName and the value is Durgesh;

// objects are the most fundamental part of the js.
// there are many ways to create objects
// Object literal syntax.
// Objects are used to group the properties which belongs together.

// difference between objects and array is that we do not need to know ther order in which data is saved in the object.

// * Retrieve the object data

console.log(Durgesh);
// there are two wats to retrieve the property of the object.
// 1st is . and other is bracket.

// console.log(name.firstName);
console.log(Durgesh.profession);

console.log(Durgesh['lastName']);

console.log(Durgesh.lastName);
console.log(Durgesh['lastName']);
 const nameKey = 'Name';
 console.log(Durgesh['first'+nameKey] );
 console.log(Durgesh[`last${nameKey}`]);
// in bracket we can do some sort of operation but in dot method it is not possible.
// when to use bracket notation or dot notation.

//  const getreply = prompt('What do you want to know about Durgesh choose between firstName,lastName,age,profession,friends');
//  console.log(Durgesh[getreply]);
//  console.log(Durgesh.getreply);

// if we just have to access the simple property form the object and we do not have to do any type of the operation we use dot notation and if we have to do any type of the operation then it is wise to use bracket notation.

// if we try to access some property which is not in the object we get undefined.

// if(Durgesh[getreply]){
//     console.log(Durgesh[getreply]);
// }
// else {
//     console.log('Wront request');
// }

const name = {
    firstName:'Gaurav',
    lastName : 'Sankhla',
    age:'19'
}
name.college = 'Dunger College';
console.log(name);
name['class'] = "BA second year";
console.log(name);
//  add new property to object and
Durgesh.location = "India";
Durgesh['twitter'] = "@DUrgesh";

console.log(Durgesh);

// Gaurav Sankhla 19years old reads in dunger college.
console.log(name.firstName+" " +name.lastName+ " "+name.age+ " "+ "years old reads in"+ " " + name.college );

console.log(`${name['firstName']} ${name['lastName']} ${name['age']} years old reads in ${name['college']}`)



// Challenge
// "Durgesh has 3 friends and his best friend is called Arvind"

// function inside a object.
// Object methods



const client = {
    firstName:'Durgesh', // key also called property
    lastName:'Tanwar',
    birthYear:1989,
    age:'',
    profession:'Teacher',
    friends:['Arvind','Prashant','Niranjan'],
    hasDriversLicense: true,
    // calcAge : function(birthYear){return 2021 - birthYear}
    calcAge:function() {
        this.age = 2021 - this.birthYear;
        // console.log(this);
        // return 2021-this.birthYear
        return this.age;
    },
    // // summery:function() {
    // //    return `${this.firstName} ${this.lastName}'s age is ${this.age} and he is ${this.profession} by his profession and he has ${this.friends.length} friends and his best friend is ${this.friends[0]}.`

    //// }
  
};



// any function which is attached to the object is called method.

//const clientage = client.calcAge(1989);

//onsole.log(clientage);
// console.log(client['calcAge'](1986));
console.log(client.calcAge());
console.log(client.age);
// console.log(client.summery());

// ! challenge 
//  todo you have to make a sentence like this Durgesh Tanwar's age is 32 and he is Teacher by his profession and he has 3 friends and his best friend is Arvind. using objects.

// if we have to use the age multiple times in our application then we
// will have to calculate the expression multiple times. this will make a burden on the system if we have to calculate
// complex things.
// ""
// // console.log(`${client.firstName} ${client.lastName}'s age is ${client.age} and he is ${client.profession} by his profession and he has ${client.friends.length} friends and his best friend is ${client.friends[0]}. `)