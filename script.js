'use strict';

const intialScore = 0;
const allScore = document.querySelectorAll('.score')
const changeColor1 = document.querySelector('.player--0');
const changeColor2 = document.querySelector('.player--1');
let items = document.getElementsByClassName('current-score');
document.getElementsByClassName('dice')[0].style.visibility = 'hidden';
let mainScore1 = intialScore;
let mainScore2 = intialScore;

for (const val of allScore) {
    val.textContent = intialScore;
}
let currentScorePlayer1 = 0;
let currentScorePlayer2 = 0;

document.querySelector(".btn--roll").addEventListener('click', function() {
    document.getElementsByClassName('dice')[0].style.visibility = 'visible';
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    function changeImage(diceNumber) {
        if (diceNumber === 1) {
            document.querySelector('.dice').src = "dice-1.png";
            if (changeColor1.classList.contains('player--active')) {
                currentScorePlayer1 = 0;
                items[0].textContent = currentScorePlayer1;
                changeColor1.classList.remove("player--active");
                changeColor2.classList.add("player--active");
            } else {
                currentScorePlayer2 = 0;
                items[1].textContent = currentScorePlayer2;
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
document.querySelector(".btn--hold").addEventListener('click', function() {
    if (changeColor1.classList.contains('player--active')) {
        mainScore1 = mainScore1 + currentScorePlayer1;
        if (mainScore1 < 100) {
            document.querySelector('#score--0').textContent = mainScore1;
            currentScorePlayer1 = 0;
            document.querySelector('#current--0').textContent = currentScorePlayer1;
            changeColor1.classList.remove("player--active");
            changeColor2.classList.add("player--active");
        } else {
            document.querySelector('#score--0').textContent = mainScore1;
            changeColor1.classList.add("player--winner")
        }
    } else {
        mainScore2 = mainScore2 + currentScorePlayer2;
        if (mainScore2 < 100) {
            document.querySelector('#score--1').textContent = mainScore2;
            currentScorePlayer2 = 0;
            document.querySelector('#current--1').textContent = currentScorePlayer2;
            changeColor2.classList.remove("player--active");
            changeColor1.classList.add("player--active");
        } else {
            document.querySelector('#score--1').textContent = mainScore2;
            changeColor2.classList.add("player--winner")
        }
    }
})

document.querySelector(".btn--new").addEventListener('click', function() {
    document.getElementsByClassName('dice')[0].style.visibility = 'hidden';
    if (changeColor1.classList.contains('player--winner')) {
        changeColor1.classList.remove('player--winner')
        changeColor1.classList.add("player--active");
        mainScore1 = 0;
        mainScore2 = 0;
        document.querySelector('#score--0').textContent = mainScore1;
        document.querySelector('#score--1').textContent = mainScore2;
        currentScorePlayer1 = 0;
        currentScorePlayer2 = 0;
        document.querySelector('#current--0').textContent = currentScorePlayer1;
        document.querySelector('#current--1').textContent = currentScorePlayer2;
    } else if (changeColor2.classList.contains('player--winner')) {
        changeColor2.classList.remove('player--winner')
        changeColor1.classList.add("player--active");
        mainScore1 = 0;
        mainScore2 = 0;
        document.querySelector('#score--0').textContent = mainScore1;
        document.querySelector('#score--1').textContent = mainScore2;
        currentScorePlayer1 = 0;
        currentScorePlayer2 = 0;
        document.querySelector('#current--0').textContent = currentScorePlayer1;
        document.querySelector('#current--1').textContent = currentScorePlayer2;
    } else if (changeColor1.classList.contains('player--active')) {
        mainScore1 = 0;
        mainScore2 = 0;
        document.querySelector('#score--0').textContent = mainScore1;
        document.querySelector('#score--1').textContent = mainScore2;
        currentScorePlayer1 = 0;
        currentScorePlayer2 = 0;
        document.querySelector('#current--0').textContent = currentScorePlayer1;
        document.querySelector('#current--1').textContent = currentScorePlayer2;
    } else {
        changeColor2.classList.remove("player--active");
        changeColor1.classList.add("player--active");
        mainScore1 = 0;
        mainScore2 = 0;
        document.querySelector('#score--0').textContent = mainScore1;
        document.querySelector('#score--1').textContent = mainScore2;
        currentScorePlayer1 = 0;
        currentScorePlayer2 = 0;
        document.querySelector('#current--0').textContent = currentScorePlayer1;
        document.querySelector('#current--1').textContent = currentScorePlayer2;
    }
})