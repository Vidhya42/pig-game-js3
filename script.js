'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');

const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

//initial conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
let curScore = 0;
let activePlayer = 0;
const scores = [0,0];
//dice roll function
rollDiceBtn.addEventListener('click', function(){
    //1. Generating random dice number
    const diceNum = Math.trunc(Math.random()*6+1);

    //2. display dice number
    dice.classList.remove('hidden');
    dice.src="dice-"+ diceNum +".png";

    //3. if dice is 1, then change the player
    if(diceNum!=1){
        //Adding dice to current score
        curScore+=diceNum;
        //displaying the current score
        document.querySelector(`#current--${activePlayer}`).textContent = curScore;

    }else{
        //change previous player current score to 0
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        curScore = 0;
        //changing the player
        activePlayer = (activePlayer===0) ? 1 : 0;

        //changing the layer of active player
        player0.classList.toggle("player--active");
        player1.classList.toggle("player--active");

    }
});
