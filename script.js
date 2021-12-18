'use strict';

const intialScore = 0;
const allScore = document.querySelectorAll('.score')
const changeColor1 = document.querySelector('.player--0');
const changeColor2 = document.querySelector('.player--1');
let items = document.getElementsByClassName('current-score');

for (const val of allScore) {
    val.textContent = intialScore;
}
let currentScorePlayer1 = 0;
let currentScorePlayer2 = 0;

document.querySelector(".btn--roll").addEventListener('click', function() {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    function changeImage(diceNumber) {
        if (diceNumber === 1) {
            document.querySelector('.dice').src = "dice-1.png";
            if (changeColor1.classList.contains('player--active')) {
                changeColor1.classList.remove("player--active");
                changeColor2.classList.add("player--active");
            } else {
                changeColor2.classList.remove("player--active");
                changeColor1.classList.add("player--active");
            }
        } else if (diceNumber === 2) {
            document.querySelector('.dice').src = "dice-2.png";
            if (changeColor1.classList.contains('player--active')) {
                currentScorePlayer1 = currentScorePlayer1 + diceNumber;
                items[0].textContent = currentScorePlayer1;
            } else {
                currentScorePlayer2 = currentScorePlayer2 + diceNumber;
                items[1].textContent = currentScorePlayer2;
            }
        } else if (diceNumber === 3) {
            document.querySelector('.dice').src = "dice-3.png";
            if (changeColor1.classList.contains('player--active')) {
                currentScorePlayer1 = currentScorePlayer1 + diceNumber;
                items[0].textContent = currentScorePlayer1;
            } else {
                currentScorePlayer2 = currentScorePlayer2 + diceNumber;
                items[1].textContent = currentScorePlayer2;
            }
        } else if (diceNumber === 4) {
            document.querySelector('.dice').src = "dice-4.png";
            if (changeColor1.classList.contains('player--active')) {
                currentScorePlayer1 = currentScorePlayer1 + diceNumber;
                items[0].textContent = currentScorePlayer1;
            } else {
                currentScorePlayer2 = currentScorePlayer2 + diceNumber;
                items[1].textContent = currentScorePlayer2;
            }
        } else if (diceNumber === 5) {
            document.querySelector('.dice').src = "dice-5.png";
            if (changeColor1.classList.contains('player--active')) {
                currentScorePlayer1 = currentScorePlayer1 + diceNumber;
                items[0].textContent = currentScorePlayer1;
            } else {
                currentScorePlayer2 = currentScorePlayer2 + diceNumber;
                items[1].textContent = currentScorePlayer2;
            }
        } else {
            document.querySelector('.dice').src = "dice-6.png";
            if (changeColor1.classList.contains('player--active')) {
                currentScorePlayer1 = currentScorePlayer1 + diceNumber;
                items[0].textContent = currentScorePlayer1;
            } else {
                currentScorePlayer2 = currentScorePlayer2 + diceNumber;
                items[1].textContent = currentScorePlayer2;
            }
        }
    }
    changeImage(diceNumber);

})

document.querySelector(".btn--btn--hold").addEventListener('click', function() {

        }