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

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze,Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, //open 24 Hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelievery: function({
//       starterIndex=1,
//       mainIndex=0,
//     time= '20:00',
//     address,
//   }){
//     console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${ this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
//   }
// };

//  restaurant.orderDelievery({
//     time: '22:30',
//     address: 'Via del Sole,21',
//     mainIndex:2,
//     starterIndex:2,
//  });

//  restaurant.orderDelievery({
//     address: 'Via del Sole,21',
//     starterIndex: 1
//  })

// const { name, openingHours, categories } = restaurant;
// //   console.log("🚀 ~ name,openingHours,categories:", name,openingHours,categories);
// console.log("🚀 ~ name:", name);
// console.log("🚀 ~ categories:", categories);
// console.log("🚀 ~ openingHours:", openingHours);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log("🚀 ~ restaurantName:", restaurantName);
// console.log("🚀 ~ tags:", tags);
// console.log("🚀 ~ hours:", hours);

// //? Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log("🚀 ~ menu:", menu);
// console.log("🚀 ~ starters:", starters);

// //? Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log("🚀 ~ a,b:", a, b);

// //? Nested Objects 
// const {fri: {open: o, close: c}} = openingHours;
// // console.log("🚀 ~ fri:", fri);
// // console.log("🚀 ~ open, close:", open, close);
// console.log("🚀 ~ o:,c:", o,c);



//? The Spread Operator (...)


// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze,Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, //open 24 Hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelievery: function({
//       starterIndex=1,
//       mainIndex=0,
//     time= '20:00',
//     address,
//   }){
//     console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${ this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
//   },

//   orderPasta : function(ing1,ing2,ing3){
//     console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
//   }
// };


// const arr = [7,8,9];
// const badNewArr = [1,2,arr[0],arr[1],arr[2 ]];
// console.log("🚀 ~ badNewArr:", badNewArr); 

// const newArr = [1,2,...arr];
// console.log("🚀 ~ newArr:", newArr);
// console.log("🚀 ~ spread operator,newArr:", ...newArr);
// console.log(1,2,7,8,9);

// const newMenu = [...restaurant.mainMenu,'Bowl'];
// console.log("🚀 ~ newMenu:", newMenu);

//?Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

//?Join two Arrays
// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
// console.log("🚀 ~ menu:", menu)

//?Iterables: arrays,string,maps,sets NOt objects
// const str = 'Janu';
// const letters = [...str,' ', ' S.'];
// console.log("🚀 ~ letters:", letters)
// console.log("🚀 ~ ...str:", ...str);
// console.log('J', 'a', 'n', 'u');
//? Template literal not support the spread operator 
// console.log(`${...str} prajapati`);

// const ingredients = [prompt("Let's make Pasta! Ingredient 1?"),prompt("Ingredient 2?"),prompt("Ingredient 3?")];
// console.log("🚀 ~ ingredients:", ingredients)// answer is ["a","b","c"] in array

//?Real world Example
// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// restaurant.orderPasta(...ingredients);//aya enter karta prompt ma 3 item nakhvi e orderPasta ma lakhine avse

//?Objects
// const newRestaurant = {foundedIn : 2020,...restaurant,founder:'Parajapati Janvi'};
// console.log("🚀 ~ newRestaurant:", newRestaurant)

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorama Roma';
// console.log("🚀 ~ restaurantCopy.name:", restaurantCopy.name);
// console.log("🚀 ~ restaurant.name:", restaurant.name);
