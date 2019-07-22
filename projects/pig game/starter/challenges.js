/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;
init();
var previousRoll;
// dice = Math.floor(Math.random() * 6) + 1;



//////////////////
//DOM MANIPULATION

// querySelector is used to attach a html id or class and retrieve its data


// document.querySelector('#current-' + activePlayer).textContent = dice;
//
// document.querySelector('#current-' +  activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x);


/////////////////////

//EVENT HANDLERS

//event can only be handled when the execution stack is empty
//event listener then gets called, and event gets put into execution stack




// function btn(){
//   //do something here
// }
// btn():
//first arg - event type,
//secondArg - function to be called when event happens
//('click', btn) becomes callback, isn't called yet
//alternatively can write anonymous function but cant be reused elsewhere -- ('click', function() {})

document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying){

    console.log(previousRoll);

    //1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;



    //2. display the result
    // var diceDOM = document.querySelector('.dice');
    // diceDOM.style.display = 'block';
    // var diceDOM2 = document.querySelector('.dice2');
    // diceDOM.style.display = 'block';
    // //type coersion means below becomes 'dice-1.png'
    // diceDOM.src = 'dice-' + dice + '.png';
    // diceDOM2.src = 'dice-' + dice2 + '.png';

    document.getElementById('dice1').style.display = 'block';
    document.getElementById('dice2').style.display = 'block';
    document.getElementById('dice1').src = 'dice-' + dice + '.png';
    document.getElementById('dice2').src = 'dice-' + dice2 + '.png';




    // console.log(diceDOM);




////////only relevant for extension 2
    //3. update round score if rolled number != 1
    // if (dice === 6 && previousRoll === 6) ||
    //     {
    //   //player loses score
    //   scores[activePlayer] = 0;
    //   document.querySelector('#score-' + activePlayer).textContent = '0';
    //   nextPlayer();
    // }
    //  else if (dice !== 1) {
    //   //add score
    //   roundScore += dice;
    //   document.querySelector('#current-' + activePlayer).textContent = roundScore;
    //
    // } else {
    //   nextPlayer();
    // }
    // previousRoll1 = dice;
    // previousRoll2 = dice2;
////////



    if (dice !== 1 && dice2 !== 1) {
      //add score
      roundScore += dice + dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
if (gamePlaying) {
  //add current score to global score
  //access player score by index
  // player 0 = index[0]
  //player 1 = index[1]
  scores[activePlayer] += roundScore;


  // update interface
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


  var input = document.querySelector('.final-score').value
  var winningScore;

  if(input){
    winningScore = input;
  } else {
    winningScore = 100;
  }
  //check if player won the game


  if (scores[activePlayer] >= winningScore){
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      document.querySelector('#dice1').style.display = 'none';
      document.querySelector('#dice2').style.display = 'none';
    gamePlaying = false;

  } else {
    //change player
    nextPlayer();
    document.querySelector('.dice').style.display = 'none';

  }
}
})


function nextPlayer() {
  //also have add and remove for classList
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;

  document.querySelector('#dice1').style.display = 'none';
  document.querySelector('#dice2').style.display = 'none';
}

//waits until click before init() is called
document.querySelector('.btn-new').addEventListener('click', init)



//initialise game
function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('#dice1').style.display = 'none';
    document.querySelector('#dice2').style.display = 'none';

    //can use query or id
    //this extracts the global score and current score for both players
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

};



//
/*
1. player loses ENTIRE score if rolls two six in a row, then next player turn
save previous dice roll in variable

2. add input filed to html to set winning score, field can be read using .value

3. add another dice to the game, player looses current score when one dice is 1
*/
