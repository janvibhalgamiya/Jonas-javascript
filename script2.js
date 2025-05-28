"use strict";

//? Activating Strict Mode

// let hasDriversLicence = false;
// const PassTest = true;

// if (PassTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log('I can Drive');

//* All words is preserve
// const interface = 'Audio';
// const private = 534;
// const  if = 23;

//? Functions

// function logger() {
//     console.log('My name is Janu');
// }

//calling / running /invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples,oranges){
//     console.log(apples,oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
//fruitProcessor(5,0,);

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);
// console.log(fruitProcessor(5,0));

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

//? Functions Declarations vs Expressions

//* Function declaration

// function calcAge1(birthYeah){
//     return 2037 - birthYeah;
// }

// const age1 = calcAge1(2022);
// console.log(age1);

//* Function Expression

// const calcAge2 = function (birthYeah){
//     return 2037 - birthYeah;
// }

// const age2 = calcAge2(2022);
// console.log(age1,age2);

//? Arrow Functions

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1996);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah,firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//    **   // return retirement ;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1996,'Janu'));
// console.log(yearsUntilRetirement(1990,'Bob'));

//? Functions calling other functions

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples,oranges){
//   const  applePieces =  cutFruitPieces(apples);
//   const  orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

//? Reviewing functions

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     // return retirement;
//     console.log(`${firstName} retires in ${retirement} years`);
//   } else {
//     // return -1;
//     console.log(`${firstName} has already retired`);
//   }
// };
// console.log(yearsUntilRetirement(2006, "janu"));
// console.log(yearsUntilRetirement(1968, "januuu"));

//? Introduction to Arrays

// const friend1 = "Roshani";
// const friend2 = "Hemani";
// const friend3 = "Krushali";

// const friends = ['Roshani','Hemani','Krushali'];
// console.log("🚀 ~ friends:", friends)

// const y  = new Array(1991,1995,2008,2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2]= 'rashmi';
// console.log("🚀 ~ friends:", friends)
// friends = ['Bob','Alice']

// const firstName = 'Jonas';
// const jonas = [firstName,'schmedmann', 2037 - 1991, 'teacher',friends];
// console.log(jonas);

//*Exercise 
// const calcAge = function(birthYeah){
//     return 2037 - birthYeah;    
// }
// const years = [1990,1967,2002,2010,2018];
// console.log( calcAge (years)); //NaN

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1,age2,age3);

// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])];
// console.log(ages);


//? Basic Array Operations (Methods)

//*add element 
// const friends = ['janvi','jenny','jack'];
// const newLength = friends.push('kitty');//last ma add
// console.log("🚀 ~ friends:", friends);
// console.log("🚀 ~ newLength:", newLength);

// friends.unshift('Mayuri');//first ma add
// console.log("🚀 ~ friends:", friends);

// //*remove element
// const popped = friends.pop();//last ma remove
// console.log("🚀 ~ friends:", friends);
// console.log("🚀 ~ popped:", popped);

// friends.shift();//first ma remove
// console.log("🚀 ~ friends:", friends);
// console.log("🚀 ~ friends:Index", friends.indexOf('jack'));
// console.log("🚀 ~ friends:Index", friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('peter'));
// console.log(friends.includes('jack'));
// console.log(friends.includes('23'));

// if (friends.includes('jack')) {
//     console.log("you have a friend called jack");
// }


//? Introduction to object

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'Teacher',
//     ['Michael','Peter','Steven']
// ];

// const jonas = {
//     firstName : "Janvi",
//     lastName : "Prajapati",
//     age : 19,
//     job:"teacher",
//     friends : ['Rashmi', 'Roshani','Jenny']
// };


//? Dot vs. Bracket notation 

// const jonas = {
//     firstName : 'Janvi',
//     lastName : 'Prajapati',
//     age: 19,
//     job: 'Developer',
//     friends: ['Michael','Peter','Steven']
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName,lastName, age,job and friends');
//  console.log(jonas[interestedIn]); ///* answer avse job lakhvi promt ma to ""Developer""
 
// if (jonas[interestedIn]) {
// console.log("🚀 ~ jonas:", jonas[interestedIn]);
// }else{
// comsole.log("Wrong Request!Choose between firstName,lastName, age,job and friends");
//}

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

//challenge 
//"Jonas has 3 friends, and his best friend is called Michael";

// jonas.friends;
// console.log("🚀 ~ jonas.friends:", jonas.friends)

// jonas.friends[0];
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called 
//     ${jonas.friends[0]}`);


//? Object Methods

const jonas = {
    fistName: 'Janvi',
    lastName: 'Prajapati',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],
    hasDriversLicence: true, 

    // calcAge: function(birthYeah){
    //     return 2037 - birthYeah;
    // }

    calcAge: function() {
        // console.log(this);  
        // return 2037 - this.birthYeah;
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

    getSummary: function(){
        return `${this.fistName} is a ${this.calcAge()}-years old ${jonas.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence.`
    }
};

// const calcAge = function (birthYeah){
    //     return 2037 - birthYeah;
    // }
    
    console.log(jonas.calcAge());
    // console.log(jonas['calcAge'](1991));
    
    console.log(jonas.age);
    
    //challenge 
    //"jonas is a 46-year old teacher,and he has a driver's licence"
    
    console.log("🚀 ~ getSummary:", jonas.getSummary());
