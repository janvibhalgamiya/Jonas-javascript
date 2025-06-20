"use strict";

//? Destructuring Arrays

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze,Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log("🚀 ~ x,y,z:", x, y, z);
// console.log("🚀 ~ arr:", arr);

// let [main, , secondary] = restaurant.categories;
// console.log("🚀 ~ main,secondary:", main, secondary);

//* Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log("🚀 ~ main,secondary:", main,secondary);

// [main, secondary] = [secondary, main];
// console.log("🚀 ~ mainn,secondaryy:", main, secondary);

//* Receive 2 return values from a function
// const [starter, mainCo] = restaurant.order(2, 0);
// console.log("🚀 ~ starter,mainCo:", starter, mainCo);

//* Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log("🚀 ~ i, ,j:", i,j);

// const [i, , [j, k]] = nested;
// console.log("🚀 ~ i,j,k:", i, j, k);

//* Default values
// const [r = 1, s = 1, t = 1] = [8, 9];
// console.log("🚀 ~ r,s,t:", r, s, t);

//? Destructuring Objects

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze,Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 Hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelievery: function({
      starterIndex=1,
      mainIndex=0,
    time= '20:00',
    address,
  }){
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${ this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
  }
};

 restaurant.orderDelievery({
    time: '22:30',
    address: 'Via del Sole,21',
    mainIndex:2,
    starterIndex:2,
 });

 restaurant.orderDelievery({
    address: 'Via del Sole,21',
    starterIndex: 1
 })

const { name, openingHours, categories } = restaurant;
//   console.log("🚀 ~ name,openingHours,categories:", name,openingHours,categories);
console.log("🚀 ~ name:", name);
console.log("🚀 ~ categories:", categories);
console.log("🚀 ~ openingHours:", openingHours);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log("🚀 ~ restaurantName:", restaurantName);
console.log("🚀 ~ tags:", tags);
console.log("🚀 ~ hours:", hours);

//? Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log("🚀 ~ menu:", menu);
console.log("🚀 ~ starters:", starters);

//? Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log("🚀 ~ a,b:", a, b);

//? Nested Objects 
const {fri: {open: o, close: c}} = openingHours;
// console.log("🚀 ~ fri:", fri);
// console.log("🚀 ~ open, close:", open, close);
console.log("🚀 ~ o:,c:", o,c);

