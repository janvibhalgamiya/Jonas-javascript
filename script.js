// // alert("Hello world!");

// let js = "amazing";
// // if(js === "amazing") alert("fun");

// // if(js === "amazing") alert("fun");
// console.log(40+82+80-87);

// console.log('jonas');
// console.log(23);

// let firstName = "jonas";
// // let first = 'jonas';
// // let firstNamePerson
// // let first_name_person
// console.log(firstName);

// //variable name conversion

// let jonas_matilda = "JB";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "coder";
// let myCurrentJob = "Teacher";

// let job1 = 'programmer';
// let job2 = 'Teacher';

// console.log(myFirstJob);

//? Data Types

// let javascript = true;
// console.log(javascript);
// console.log(typeof(javascript));
// console.log(typeof 235);
// console.log(typeof "first");

// let year;
// console.log(typeof year);

// year = 878;
// console.log(typeof year);

// console.log(typeof null);

//? Variables(let,var and const)

// let age = 30;
// age = 31;

// const birthYear = 1995;
// // birthYear = 1992;

// // const job;

// var job = 'programmer';
// job = 'Teacher';
// lastName = "badman";

// console.log(lastName);

//? Basic operators

//? Arithmetic(Math) operator (+,-)

// const now = 2025;
// const ageJones = now - 2006;
// const ageRoshani = now- 2005;
// console.log(ageJones,ageRoshani);
// // console.log(ageRoshani);
// console.log(ageJones * 2,ageJones / 2,2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'janu';
// const lastName = 'prajapati';
// console.log(firstName + ' ' + lastName);

//? Asignment operator

// let x = 10 + 5; //15
// x += 10; //x = x + 10 //25
// x *= 4; //x = x * 4 //100
// x++;//x = x + 1
// x--;//x = x - 1
// console.log(x);

//? Comparison operator

// console.log(ageJones < ageRoshani);//>,<,>=,<=
// console.log(ageJones <= 18);

// const isFullAge = ageJones <= 18;

// console.log(now - 1991 > now - 2020);

// const now = 2038;
// const ageJones = now - 1991;
// const ageRoshani = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x,y;
// x = y = 25 - 10 - 5;// x = y = 10, x = 10
// console.log(x,y);

// const averageAge = ageJones + ageRoshani /  2;
// console.log(ageJones,ageRoshani,averageAge);

//? string and template literals

// const firstName = 'janu';
// const job = 'developer';
// const birthYear = 2006;
// const year = 2025;

// const janu = "I'm " + firstName + ',a ' + (year - birthYear)  +  ' years old '  + job + '!';
// console.log(janu);

// const janvi = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(janvi);

// console.log(`just a regular string...`);

// console.log('string with \n\
//     multiple \n\
//     lines');

// console.log(`string
//     muktiple
//     lines`);

//? Talking decisions: if/else statements

// const age = 19;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('sarah can start driving license 🚗');
// }

// if (age >= 18) {
//    console.log('sarah can start driving license 🚗');
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`sarah is too young. Wait another ${yearsLeft} years:) `);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//      century = 20;
// } else {
//      century = 21;
// }
// console.log(century);

//? Type conversion and coercion

// const inputYear = '2006';
// console.log(Number(inputYear),inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('janu'));
// console.log(typeof NaN);

// console.log(String(23));

//? type coercion

// console.log('I am ' + 19 + ' years old');
// console.log('I am ' + String(19) + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' * '2');
// console.log('23' / '2');

// let n = '1' + 1;   //11
// n = n - 1;
// console.log(n);

//? Truthy and Falsy values

//5 Falsy values:= 0,'',undefined,null,NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean('janu'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//     console.log("Don't spend it all;");
// }else{
//     console.log("You should get a job!");   
// }

// let height;
// if (height) {
//     console.log('YAY! Height is defined');
// }else{
//     console.log('Height is not define');
// }


//? Equality operators : == vs ===

const age = 18;
if (age === 18) console.log("You just become an adult:D(strict)");
if (age == 18) console.log("You just become an adult:D(loose)");


//const favourite = prompt("What's your favourite number?");
//console.log(favourite);//je nakho field ma e j
//console.log(typeof favourite);//string(23 type string ma ave)


let favourite =Number('23');
if (favourite === 23) { // '23' === 23 (type not same)
    console.log("cool! 23 is a amazing number!");
}else if(favourite === 7){
    console.log('7 is also a cool number');
}else if(favourite === 9){
    console.log('9 is also a cool number');
}else{
    console.log('Number is not 23 or 7 or 9');
}

if(favourite !== 23) console.log('Why not 23?');
