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

let curScore, activePlayer, scores, playing;

//initial conditions
const init = function(){
    curScore = 0;
    activePlayer = 0;
    scores = [0,0];
    playing=true;
    currentScore0.textContent=0;
    currentScore1.textContent=0;
    score0.textContent=0;
    score1.textContent=0;
    dice.classList.add('hidden');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
}
init();

const switchPlayer = function(){
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    //changing the player
    curScore = 0;
    activePlayer = (activePlayer===0) ? 1 : 0;

    //changing the layer of active player
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
}

//dice roll function
rollDiceBtn.addEventListener('click', function(){
    if(playing){
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
            switchPlayer();

        }
    }
});

//Hold button function
holdBtn.addEventListener('click', function(){
    if(playing){

        //1. Add current score to active player score
        scores[activePlayer] += curScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        //2. Check if active player score is >100
        if(scores[activePlayer]>=100){
            playing=false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            dice.classList.add('hidden');
        }else{
            switchPlayer();
        }
    }
});

//reset the game
newGameBtn.addEventListener('click', init);
