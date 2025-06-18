// alert("Hello world!");
// let js = "amazing";
// undefined
// if(ja === "amazing") alert("fun");
//alert ma fun
// js = "boring";
// if(js === "amazing") alert("fun");
//undefined
// 40+82+80-87
//115

"use strict";

//? Scoping in Practice

// function calcAge(birthYear){
//     const age = 2037 - birthYear;

//     function printAge(){
//         const output = `${firstName}, you are ${age},born in ${birthYear}`;

//         if (birthYear >= 1981  && birthYear <= 1996) {
//             var millenial = true;
//             //creating new variable with  same name as outer scope's variable
//             const firstName = 'Roshu';
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log("🚀 ~ printAge ~ str:", str);

//             function add(a,b){
//                 return a + b;
//             }

//             //Reassigning outer scope's variable
//             output = 'NEW OUTPUT!';
//         }
//         console.log("🚀 ~ printAge ~ millenial:", millenial);
//         console.log("🚀 ~ printAge ~ output:", output);
//         // console.log("🚀 ~ add ~ add:", add(2,3));
//     }
//         printAge();

//         return age;
//     }

//     const firstName = 'janu';
//     calcAge(1991);

//? Variable Environment Hoisting and The TDZ

//Variable
// console.log("🚀 ~ me:", me);
// console.log("🚀 ~ job:", job);
// console.log("🚀 ~ year:", year);

// var me = 'janu';
// let job = 'teacher';
// const year = 1991;

//Functions

// console.log("🚀 ~ addDecl ~ addDecl:", addDecl(2,3));
// console.log("🚀 ~ addExpr ~ addExpr:", addExpr(2,3));
// console.log("🚀 ~ addArrow:", addArrow(2,3));
// console.log("🚀 ~ addArrow:", addArrow);

// function addDecl(a,b){
//     return a + b;
// }

// const addExpr = function(a,b){
//     return  a + b;
// };

// var addArrow = (a,b) => a + b;

//? Example

// if (!numProducts) deleteShoppingCard();

// var numProducts = 10;

// function deleteShoppingCard(){
//     console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//? The This Keyword

// console.log(this);

// const calcAge = function(birthYear){
//     console.log(2037 - birthYear);
// console.log(this);
// }
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
// console.log(this);
// }
// calcAgeArrow(1980);

// const jonas = {
//     year : 1991,
//     calcAge : function(){
// console.log(this);
// console.log(2037 - this.year);
//     },
// }
// jonas.calcAge();

// const matilda = {
//     year : 2017,
// };
// matilda.calcAge = jonas.calcAge;

// console.log(matilda);
// console.log(jonas);

// matilda.calcAge();

// const f = jonas.calcAge;
// f();
// console.log("🚀 ~ f:", f);

//? Regular Functions vs Arrow Functions

var firstName = "Matilda";

const jonas = {
  firstName: "janu",
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //? Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // //* console.log(this.year >= 1981 && this.year <= 1996);
    // };

    //? Solution 2
    const isMillenial = () => {
        console.log(this);
        console.log(this.year >= 1981 && this.year <= 1996);
    }
    
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();


//? Only available in regular function
//? Argument Keywords

const addExpr = function (a,b){
    console.log(arguments);
    
    return a + b;
};
addExpr(2,6);
addExpr(2,6,8,12);

var addArrow = (a,b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2,5,8);