'use strict';

let numberToGuess = Math.floor(Math.random() * 50) + 1;
const submit = document.getElementById('check');
const again = document.getElementById('again');
let number = document.querySelector('.number');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let message = document.querySelector('.message');
let guess = document.querySelector('.guess');

function displayMessage(msg) {
  message.textContent = msg;
}

again.onclick = function () {
  document.body.style.backgroundColor = '#222';
  submit.disabled = false;
  submit.style.backgroundColor = '#eee';
  guess.value = '';
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  score.textContent = '20';
  numberToGuess = Math.floor(Math.random() * 50) + 1;
};

submit.onclick = function () {
  if (!guess.value) {
    displayMessage('❗ Please enter a number!');
  } else if (
    Number(score.textContent) === 1 &&
    (Number(guess.value) < numberToGuess || Number(guess.value) > numberToGuess)
  ) {
    score.textContent = '0';
    displayMessage('❌ Game over! Try again!');
    submit.style.backgroundColor = '#444444';
    submit.disabled = true;
  } else {
    if (Number(guess.value) != numberToGuess) {
      score.textContent = Number(score.textContent) - 1;
      displayMessage(
        Number(guess.value) < numberToGuess
          ? `📉 Too low! (${guess.value})`
          : `📈 Too high! (${guess.value})`
      );
    } else {
      document.body.style.backgroundColor = '#32a852';
      displayMessage(`🎉 Correct guess! (${guess.value})`);
      number.textContent = numberToGuess;
      submit.style.backgroundColor = '#444444';
      submit.disabled = true;
      if (Number(score.textContent) > Number(highscore.textContent)) {
        highscore.textContent = Number(score.textContent);
      }
    }
  }
};
