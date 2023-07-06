/*
Algorithm:
1. Generate computer choice:
  1a. Use random function
  1b. Multiply outcome by 3 and round down
  1c. Pick rock-paper-scissors based on numbers 0-1-2 
2. Ask for human choice:
  2a. Use prompt to ask for input
  2b. Store input in a variable
3. Pick winner of a round
  3a. Compare computer choice with human choice
  3b. Pick winner of a round based on rock-paper-scissors game rules
4. Repeat steps 1-3 five times
  4a. Create for loop to call above functions
  4b. Store scores in variables for computer and human
5. Present winner of the game
  5a. Compare scores for computer and human
  5b. Pick winner of the whole game
*/

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3); //generate random value between 0 and 1; multiply it by 3 and round down to whole number
  let choice = "";
  switch (randomNumber) { //assign rock-paper-scissors to values 0-1-2
    case 0:
      choice = 'Rock';
      break;
    case 1:
      choice = 'Paper';
      break;
    case 2:
      choice = 'Scissors';
      break;
  }
  return choice;
}

function checkPlayerChoice (choice) {
  return ((choice === 'Rock' || choice === 'Paper' || choice === 'Scissors') ?
    choice :
    0 ) //check if choice is rock-paper-scissors and return it if true or return 0 if false
}

function uppercaseFirstLetter (word) {
  let lowercaseWord = word.toLowerCase(); //make word lowercase
  let uppercaseFirstLetter = (lowercaseWord.slice(0, 1)).toUpperCase(); //slice off first letter and make it uppercase
  let restOfWord = lowercaseWord.slice(1); //get rest of the word (exclude first letter)
  return (uppercaseFirstLetter + restOfWord); //join first (uppercase) letter and rest of the word (lowercase)
}

function getPlayerChoice() {
  let playerInput = prompt('Input your choice:'); //ask player for input in prompt
  return ((checkPlayerChoice(uppercaseFirstLetter(playerInput)) != 0) ?
    uppercaseFirstLetter(playerInput) :
    0); //check if input is valid (rock-paper-scissors). If yes return it in correct format
}

function singleRound (playerSelection, computerSelection) {
  if (!playerSelection) {
    //return 'play the game man'; //return that if player input is not valid
    return 0; //0 means invalid input
  }
  else if (playerSelection === computerSelection) { //check for tie
    //return 'Tie!';
    return 1; //1 means tie
  }
  else if ((playerSelection === 'Paper' && computerSelection === 'Scissors') || //check for player losing
  (playerSelection === 'Scissors' && computerSelection === 'Rock') ||
  (playerSelection === 'Rock' && computerSelection === 'Paper')) {
    //return ('You Lose! ' + computerSelection + ' beats ' + playerSelection);
    return 2; //2 means computer wins the round
  }
  //return ('You Win! ' + playerSelection + ' beats ' + computerSelection); //if above conditions are not met, this means that player wins
  return 3; //3 means player wins the round
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) { //loop to play five rounds of game
    let computerSelection = getComputerChoice(); //store computer choice
    let playerSelection = getPlayerChoice(); //store player choice
    let roundOutcome = singleRound(playerSelection, computerSelection);
    switch (roundOutcome) {
      case 0:
        console.log('Play the game, man...'); //output this if player input is invalid
        break;
      case 1:
        console.log('Tie!'); //tie
        break;
      case 2:
        computerScore += 1; //update computer score
        console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection); //output to show that player looses
        break;
      case 3:
        playerScore += 1; //update player score
        console.log('You Win! ' + playerSelection + ' beats ' + computerSelection); //output to show that player wins
        break;
    }
  }
  console.log('GAME SCORE:'); //visual distinction between round outcomes ond the game outcome
  if (playerScore > computerScore) {
    console.log('You won the game ' + playerScore + ' to ' + computerScore + '!'); //message if player is winner (with scores)
  }
  else if (playerScore < computerScore) {
    console.log('You lost the game ' + computerScore + ' to ' + playerScore + ' :c') //message if player is loser (with scores)
  }
  else {
    console.log('Tie (' + playerScore + ' to ' + computerScore + ')'); //message in case of tie (with scores)
  }
}

game();