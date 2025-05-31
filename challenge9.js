
// function printForest(){
//     const arr = [17,21,23];
//     console.log(`[${arr[0]},${arr[1]},${arr[2]}] will print "...${arr[0]}'C in 1 days...${arr[1]}'C in 2 days...${arr[2]}'C in 3 days...`);
// }
// printForest();

// function printForest(){
//     const arr = [12, 5, -5, 0, 4];
//     console.log(`[${arr[0]},${arr[1]},${arr[2]},${arr[3]},${arr[4]}] will print "...${arr[0]}'C in 1 days...${arr[1]}'C in 2 days...${arr[2]}'C in 3 days...${arr[3]}'C in 4 days...${arr[4]}'C in 5 days...`);
// }
// printForest();


function printForecast(arr) {
    let forecastStr = '';
    for (let i = 0; i < arr.length; i++) {
      forecastStr += `... ${arr[i]}ºC in ${i + 1} days `;
    }
    console.log(forecastStr + '...');
  }
  
  // Test data:
  printForecast([17, 21, 23]); 
  printForecast([12, 5, -5, 0, 4]); 
