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
