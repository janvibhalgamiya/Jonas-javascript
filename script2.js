 'use strict';
 
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
function calcAge1(birthYeah){
    return   2037 - birthYeah;
}

const age1 = calcAge1(2022);
console.log(age1);

//* Function Expression
const calcAge2 = function (birthYeah){
    return 2037 - birthYeah;
}

const age2 = calcAge2(2022);
console.log(age1,age2);
