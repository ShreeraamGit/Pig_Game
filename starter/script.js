'use strict';

const intialScore = 0;
const allScore = document.querySelectorAll('.score');

for (const val of allScore) {
    val.textContent = intialScore;
}

document.querySelector(".btn--roll").addEventListener('click', function() {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);

    function changeImage(diceNumber) {
        if (diceNumber === 1) {
            document.querySelector('.dice').src = "dice-1.png";
            const changeColor1 = document.querySelector('.player--0');
            const changeColor2 = document.querySelector('.player--1');
            if (changeColor1.classList.contains('player--active')) {
                changeColor1.classList.remove("player--active");
                changeColor2.classList.add("player--active");
            } else {
                changeColor2.classList.remove("player--active");
                changeColor1.classList.add("player--active");
            }
        } else if (diceNumber === 2) {
            document.querySelector('.dice').src = "dice-2.png";

        } else if (diceNumber === 3) {
            document.querySelector('.dice').src = "dice-3.png";
        } else if (diceNumber === 4) {
            document.querySelector('.dice').src = "dice-4.png";
        } else if (diceNumber === 5) {
            document.querySelector('.dice').src = "dice-5.png";
        } else {
            document.querySelector('.dice').src = "dice-6.png";
        }
    }
    changeImage(diceNumber);
})

const allCurrent = document.querySelectorAll('.current-score');

for (var i = 0; i < allCurrent.length; i++) {
    let currentScore1 = allCurrent[i].textContent;
    currentScore1 = 5;
    console.log(currentScore1);
}