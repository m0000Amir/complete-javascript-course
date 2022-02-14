'use strict';
/* 
console.log(document.querySelector('.label-score'));

document.querySelector('.message').textContent = "Correct number"

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

document.querySelector('.check').addEventListener('click', function() {
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

document.querySelector('.message').textContent = "Correct number"
if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
}
})