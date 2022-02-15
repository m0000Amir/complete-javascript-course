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

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No number!';
    // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('.message').textContent = "✅ Correct number";
        
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

    } else if (score > 1) {
        // when guess to low
        if (guess < secretNumber) {
            document.querySelector('.message').textContent = "Too low ⤴️";
            score--;
            document.querySelector('.score').textContent = score;
        // when guess to high
        } else if (guess > secretNumber) {
            document.querySelector('.message').textContent = "Too high ⤵️";
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
    else {
        document.querySelector('.message').textContent = 'Wasted 💩';
    }
})

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
})