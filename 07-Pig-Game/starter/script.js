'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice')

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore;
let scores;

let currentEl;
let playing;

const init = function () {
    currentScore = 0;
    scores = [0, 0];
    playing = true;

    score0El.textContent = '0';
    score1El.textContent = '0';
    current0El.textContent = '0';
    current1El.textContent = '0';
    currentEl = current0El;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();


const switchPlayer = function () {
    currentEl = currentEl === current0El ? current1El : current0El;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
    if (playing) {
//    1. Generating new dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
//    2. Display dice roll
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
//    3. Chose who is next player
        if (dice !== 1) {
            currentScore += dice;
            currentEl.textContent = currentScore;
            console.log(currentScore);
        } else {
            currentEl.textContent = '0';
            currentScore = 0;
            switchPlayer();
        }

    }
})


btnHold.addEventListener('click', function () {
    let i = currentEl === current0El ? 0 : 1;
    scores[i] = currentScore;
    document.getElementById(`score--${i}`)
        .textContent = String(scores[i]);

    if (scores[i] >= 10) {
        document
            .querySelector(`.player--${i}`)
            .classList.add('player--winner');
        document
            .querySelector(`.player--${i}`)
            .classList.remove('player--active');
        playing = false;
        diceEl.classList.add('hidden');
        // debugger;
    } else {
        switchPlayer();
    }
})


btnNew.addEventListener('click',  init)