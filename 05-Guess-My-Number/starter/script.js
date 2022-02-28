'use strict';
/* 
console.log(document.querySelector('.label-score'));

document.querySelector('.message').textContent = "Correct number"

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener(
    'click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No number!';
        displayMessage('⛔️ No number!');
    // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;

        displayMessage("✅ Correct number");
        
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess != secretNumber) {
        if (score > 1) {
            displayMessage( 
                guess > secretNumber ? "Too low ⤴️" : "Too high ⤵️");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Wasted 💩');
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random()*20) + 1;
    console.log(secretNumber);
    score = 20;
    document.querySelector('.number').textContent = '?';
    displayMessage("Start guessing...");
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
})