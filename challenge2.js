// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

// console.log(BMIMark,BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

const johnHigherBMI = BMIJohn > BMIMark;
console.log(johnHigherBMI);


if (markHigherBMI > johnHigherBMI) {
    console.log("Mark's BMI is higher than John's!"); 
}else{
    console.log("John's BMI is higher than Mark's!");
}

if (markHigherBMI > johnHigherBMI) {
    console.log(`Mark's BMI ${BMIMark} is higher than john's BMI ${BMIJohn}`);
}else{
    console.log(`John's BMI ${BMIJohn} is higher than Mark's BMI ${BMIMark}`);
}