/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

////////////////////////////////////////////////////
/* //////////////////// NOTES /////////////////////

// round down random number times six plus one
// Math.floor(Math.random() * 6) + 1;

// select the element dynamically and change text content NOT innerHTML
// document.querySelector('#current-' + activePlayer).textContent = dice;

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
*/

// define variables HERE so they can be used globally!
var scores, roundScore, activePlayer, gamePlaying;

function init() {
    // set game scores to zero
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    // remove dice image on page load
    document.querySelector('.dice').style.display = 'none';
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

// roll dice on button click (event listener + callback function)
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // get rando number
        var dice = Math.floor(Math.random() * 6) + 1;
        // display result 
        // bring dice image back
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        // change dice image to equal number rolled
        diceDOM.src = 'dice-' + dice + '.png';
        // update roundScore IF rolled number was NOT a 1
        if (dice !== 1) {
            // add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }
    }
});

// hold function when button clicked
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // add current score to global score
        scores[activePlayer] += roundScore;
        // OR: scores[activePlayer] = scores[activePlayer] + roundScore
        // update UI to show score
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // check if player won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
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

// next player function
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
    document.querySelector('.dice').style.display = 'none';
}

// new game 
document.querySelector('.btn-new').addEventListener('click', init);