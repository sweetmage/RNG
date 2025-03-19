'use strict';

const guessForm = document.querySelector('#guessForm');
const numGuessInput = document.getElementById('numGuess');
const gameOutput = document.getElementById('gameOutput');

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function handleGuessSubmit(event) {
    event.preventDefault();

    let userGuess = parseInt(numGuessInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        gameOutput.textContent = 'Please enter a valid number between 1 and 10.';
        gameOutput.classList.add('error');
    } else {
        let randomNumber = generateRandomNumber();
        if (userGuess === randomNumber) {
            gameOutput.textContent = `Congratulations! You guessed correctly!`;
        } else {
            gameOutput.textContent = `Sorry, your guess (${userGuess}) was incorrect. The correct number was ${randomNumber}. Try again!`;
        }

        numGuessInput.value = '';
    }
}

guessForm.addEventListener('submit', handleGuessSubmit);
