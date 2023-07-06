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
  let randomNumber = Math.floor(Math.random() * 3);
  let choice = "";
  switch (randomNumber) {
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
    0 );
}

function uppercaseFirstLetter (word) {
  let lowercaseWord = word.toLowerCase();
  let uppercaseFirstLetter = (lowercaseWord.slice(0, 1)).toUpperCase();
  let restOfWord = lowercaseWord.slice(1);
  return (uppercaseFirstLetter + restOfWord);
}

function getPlayerChoice() {
  let playerInput = prompt('Input your choice:');
  return ((checkPlayerChoice(uppercaseFirstLetter(playerInput)) != 0) ?
    uppercaseFirstLetter(playerInput) :
    0);
}

function singleRound (playerSelection, computerSelection) {
  if (!playerSelection) { //if player selection function returns 'false' it means invalid input and round cannot be played
    return 0;
  }
  else if (playerSelection === computerSelection) {
    return 1;
  }
  else if ((playerSelection === 'Paper' && computerSelection === 'Scissors') ||
  (playerSelection === 'Scissors' && computerSelection === 'Rock') ||
  (playerSelection === 'Rock' && computerSelection === 'Paper')) {
    return 2;
  }
  return 3; //if player didn't tie or lose, they had to win
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    let roundOutcome = singleRound(playerSelection, computerSelection);
    switch (roundOutcome) {
      case 0:
        console.log('Play the game, man...');
        break;
      case 1:
        console.log('Tie!');
        break;
      case 2:
        computerScore += 1;
        console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection);
        break;
      case 3:
        playerScore += 1;
        console.log('You Win! ' + playerSelection + ' beats ' + computerSelection);
        break;
    }
  }
  console.log('GAME SCORE:');
  if (playerScore > computerScore) {
    console.log('You won the game ' + playerScore + ' to ' + computerScore + '!');
  }
  else if (playerScore < computerScore) {
    console.log('You lost the game ' + computerScore + ' to ' + playerScore + ' :c');
  }
  else {
    console.log('Tie (' + playerScore + ' to ' + computerScore + ')');
  }
}

game();