/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// setting variables
var scores, roundScore, activePlayer;
scores = [0,0];
roundScore = 0;
activePlayer = 0;

// .floor rounds down + .random gives random number 1-5 + add 1
// dice = Math.floor(Math.random() * 6) + 1;

// displaying roll score under current
document.querySelector('#current-' + activePlayer).innerHTML = dice;

// grabs the score and holds it in x
var x = document.querySelector('#score-0').textContent;
console.log(x);

// removes the dice onload
document.querySelector('.dice').style.display = 'none';

// event listener: dice roll on click
function btn() {
    // random number
    var dice = Math.floor(Math.random() * 6) + 1;
    // display result
    // DOM element of the dice 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    // update round score IF roll != 1
}
document.querySelector('.btn-roll').addEventListener('click', btn);