"use strict";
 
// console.log(document.querySelector('.message').textContent);


//  console.log(document.querySelector('.message').textContent);

//  document.querySelector('.number').textContent = 13;
//  document.querySelector('.score').textContent = 10;

//  document.querySelector('.guess').value = 23;
//  console.log(document.querySelector('.guess').value);

 

let secretNumber = Math.trunc(Math.random() * 20 ) +  1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;

}


document.querySelector('.check').addEventListener('click', function(){
    //console.log(document.querySelector('.guess').value);
    
    
    const guess = Number(document.querySelector('.guess').value);
    console.log("🚀 ~ guess:",guess,typeof guess);
    
    //  const guess = document.querySelector('.message').textContent = '🎉 Correct Number!';
    
    //when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No number!';
        displayMessage('⛔ No number!');
            
        //when players wins
    }else if(guess === secretNumber){
        // document.querySelector('.message').textContent = '🎉 Correct Number!';

        displayMessage('🎉 Correct Number!');

        document.querySelector('.number').textContent = secretNumber;
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore; 
        }
        
        //when guess is top high and top low
    }else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent =
            guess > secretNumber ? '📈 Top high!' : '📉Top low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    
});  

document.querySelector('.again').addEventListener('click',
    function(){
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        // document.querySelector('.message').textContent = 'Start guessing...';
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = 20;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = ' ';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.highscore').textContent = 0;
    }
)
//  ****************************************************** 

// Implement a game rest functionality, so that the player can make a new guess!

// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)

// GOOD LUCK �
