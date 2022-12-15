"use strict";

let difficulty = 50;
let numberToGuess = Math.floor(Math.random() * difficulty) + 1;
const between = document.querySelector(".between");
const submit = document.getElementById("check");
const again = document.getElementById("again");
const diff = document.getElementById("difficulty");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const message = document.querySelector(".message");
const guess = document.querySelector(".guess");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-modal");
const ez = document.querySelector(".ez");
const nm = document.querySelector(".nm");
const hd = document.querySelector(".hd");
const ins = document.querySelector(".in");
const txtDiff = document.querySelector(".txtDiff");
let ezHS = 0;
let nmHS = 0;
let hdHS = 0;
let insHS = 0;

function displayMessage(msg) {
  message.textContent = msg;
}

function updateBetween() {
  between.textContent = `(Between 1 and ${difficulty})`;
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
function removeCurrDiff() {
  ez.classList.remove("currDiff");
  nm.classList.remove("currDiff");
  hd.classList.remove("currDiff");
  ins.classList.remove("currDiff");
}

function reset() {
  document.body.style.backgroundColor = "#222";
  submit.disabled = false;
  submit.style.backgroundColor = "#eee";
  guess.value = "";
  message.textContent = "Start guessing...";
  number.textContent = "?";
  score.textContent = "20";
  numberToGuess = Math.floor(Math.random() * difficulty) + 1;
  console.log(numberToGuess);
  number.style.width = "15rem";
}

ez.addEventListener("click", function () {
  difficulty = 20;
  highscore.textContent = ezHS;
  removeCurrDiff();
  ez.classList.add("currDiff");
  txtDiff.textContent = "Easy";
  updateBetween();
  reset();
});
nm.addEventListener("click", function () {
  difficulty = 50;
  highscore.textContent = nmHS;
  removeCurrDiff();
  nm.classList.add("currDiff");
  txtDiff.textContent = "Normal";
  updateBetween();
  reset();
});
hd.addEventListener("click", function () {
  difficulty = 100;
  highscore.textContent = hdHS;
  removeCurrDiff();
  hd.classList.add("currDiff");
  txtDiff.textContent = "Hard";
  updateBetween();
  reset();
});
ins.addEventListener("click", function () {
  difficulty = 1000;
  highscore.textContent = insHS;
  removeCurrDiff();
  ins.classList.add("currDiff");
  txtDiff.textContent = "Insane";
  updateBetween();
  reset();
});

close.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

diff.onclick = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

again.onclick = reset;

submit.onclick = function () {
  if (!guess.value) {
    displayMessage("❗ Please enter a number!");
  } else if (
    Number(score.textContent) === 1 &&
    (Number(guess.value) < numberToGuess || Number(guess.value) > numberToGuess)
  ) {
    score.textContent = "0";
    displayMessage("❌ Game over! Try again!");
    submit.style.backgroundColor = "#444444";
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
      document.body.style.backgroundColor = "#32a852";
      displayMessage(`🎉 Correct guess! (${guess.value})`);
      number.textContent = numberToGuess;
      submit.style.backgroundColor = "#444444";
      number.style.width = "300px";
      submit.disabled = true;
      if (Number(score.textContent) > Number(highscore.textContent)) {
        if (difficulty === 20) {
          ezHS = Number(score.textContent);
          highscore.textContent = ezHS;
        } else if (difficulty === 50) {
          nmHS = Number(score.textContent);
          highscore.textContent = nmHS;
        } else if (difficulty === 100) {
          hdHS = Number(score.textContent);
          highscore.textContent = hdHS;
        } else {
          insHS = Number(score.textContent);
          highscore.textContent = insHS;
        }
      }
    }
  }
};
