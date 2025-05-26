// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolphin' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �

//? Data : 1
// const Dolphins = (44+23+71) / 3;
// const Koalas = (65+54+49) / 3;

//? Data : 2
// const Dolphins = (85+54+41) / 3;
// const Koalas = (23+34+27) / 3;


// const calcAverage = () => {
//     return  console.log(`Dolphins Team score is ${Dolphins} and Koalas Team score is ${Koalas}`);
// };

// calcAverage();

// ******************************************************************

// const calcAverage = (score1,score2,score3) => {
//     return  (score1,score2,score3) / 3;
// };

// const dolphinAvg = calcAverage(44,23,71);
// console.log("🚀 ~ dolphinAvg:", dolphinAvg)
// const koalasAvg = calcAverage(65,54,49);
// console.log("🚀 ~ koalasAvg:", koalasAvg)

// const dolphinAvg = calcAverage(85,54,41);
// console.log("🚀 ~ dolphinAvg:", dolphinAvg)
// const koalasAvg = calcAverage(23,34,27);
// console.log("🚀 ~ koalasAvg:", koalasAvg)

// ******************************************************************

// function checkWinner(avgDolphin,avgKoalas) {
//     // To check if number A is at least double number B, check for A >= 2 * B.
//     if (avgDolphin >= 2 * avgKoalas) {
//         console.log(`Dolphins win ${avgDolphin}🏆`);
//     }else if(avgKoalas >= 2 * avgDolphin){
//         console.log(`Koalas win ${avgKoalas}🏆`);
//     }else{
//         console.log(`No teams Win😔`);
//     }
// }

// console.log("checking winnerrrrrrr")
// checkWinner(dolphinAvg,koalasAvg);
// console.log("winner check doneeeee")


//? jonas bhai solution

const calcAverage = (a,b,c) => (a + b + c) / 3;
console.log(calcAverage(3,4,8));

//test 1

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);

const checkWinner = function (avgDolphin,avgKoalas){
    if (avgDolphin >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphin} vs. ${avgKoalas})`);
    }else if(avgKoalas >= 2 * avgDolphin){
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphin})`);
    }else{
        console.log('No team Wins...');
    }
}
checkWinner(scoreDolphins,scoreKoalas);
checkWinner(547,111);
