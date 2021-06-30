'use strict';

let background = document.querySelector('body');
let scoreDisplay = document.querySelector('.score');

let againButton = document.querySelector('.again');
let checkButton = document.querySelector('.check');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20; 
let highscore = 0;


const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //se o input for falso:
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    background.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (scoreNumber > highscore) {
      highscore = scoreNumber;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
      scoreNumber--;
      scoreDisplay.textContent = scoreNumber;
    } else {
      displayMessage('You lost the game!');
      scoreDisplay.textContent = 0;
    }
  }

  document.querySelector('.guess').value = '';
});


againButton.addEventListener('click', function () {
  scoreNumber = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  scoreDisplay.textContent = scoreNumber;

  background.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
});
