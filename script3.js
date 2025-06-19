"use strict";

//? Destructuring Arrays

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze,Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log("🚀 ~ x,y,z:", x, y, z);
console.log("🚀 ~ arr:", arr);

let [main, , secondary] = restaurant.categories;
console.log("🚀 ~ main,secondary:", main, secondary);

//* Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log("🚀 ~ main,secondary:", main,secondary);

[main, secondary] = [secondary, main];
console.log("🚀 ~ mainn,secondaryy:", main, secondary);

//* Receive 2 return values from a function
const [starter, mainCo] = restaurant.order(2, 0);
console.log("🚀 ~ starter,mainCo:", starter, mainCo);

//* Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log("🚀 ~ i, ,j:", i,j);

const [i, , [j, k]] = nested;
console.log("🚀 ~ i,j,k:", i, j, k);

//* Default values
const [r = 1, s = 1, t = 1] = [8, 9];
console.log("🚀 ~ r,s,t:", r, s, t);