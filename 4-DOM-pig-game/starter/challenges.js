/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/* //////////////////////////////////////////////////////////////////////
/////////////////////////////  NOTES  //////////////////////////////////

round down random number times six plus one
    Math.floor(Math.random() * 6) + 1;

select the element dynamically and change text content NOT innerHTML
    document.querySelector('#current-' + activePlayer).textContent = dice;

/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////// */

// define variables HERE so they can be used globally!
var scores, roundScore, activePlayer, gamePlaying;

var lastDice;

// initialize game! 
function init() {
    // set game score variables to zero
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    // remove dice image on page load
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';

    // change all values to zero
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // reset player names
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // remove winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    // remove active class
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    // add active class back to player one
    document.querySelector('.player-0-panel').classList.add('active');

    // turn game ON
    gamePlaying = true;
}
init();

// ROLL dice on button click (event listener + callback function)
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {

        // get rando number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // display result 
        // bring dice image back
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        // // player loses score if two sixes rolled
        // if (dice1 === 6 || dice2 === 6 && lastDice === 6) {
        //     // player loses score
        //     scores[activePlayer] = 0;
        //     // remove score from board
        //     document.querySelector('#score-' + activePlayer).textContent = '0';
        //     // switch player
        //     nextPlayer();
        // } else

        // update roundScore IF rolled number was NOT a 1
        if (dice1 !== 1 && dice2 !== 1) {
            // add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }

        // store previous dice roll
        lastDice = dice1 + dice2;
    }
    console.log("D1=" + dice1 + "  " + "D2=" + dice2);
});

// HOLD function when button clicked
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {

        // add current score to global score
        scores[activePlayer] += roundScore;

        // OR: scores[activePlayer] = scores[activePlayer] + roundScore
        // update UI to show score
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // local variables here
        var input = document.querySelector('.final-score').value;
        var winningScore;

        // if there is something in the box, that is the winning value
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // check if player won the game using the value in the box
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            // turn game off until next time
            gamePlaying = false;
        } else {
            // next player 
            nextPlayer();
        }
    }
});

// NEXT player function
function nextPlayer() {
    // next player

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // change scores to zero when player swaps
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    // change active player 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // hide dice until next player rolls
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    console.log("Next Player!");
}

// new game 
document.querySelector('.btn-new').addEventListener('click', init);