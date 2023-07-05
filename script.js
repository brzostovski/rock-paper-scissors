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
  return ((choice === 'Rock' || choice === 'Paper' || choice === 'Scissors') ? choice : 0 ) //check if choice is rock-paper-scissors and return it if true or return 0 if false
}

function uppercaseFirstLetter (word) {
  let lowercaseWord = word.toLowerCase(); //make word lowercase
  let uppercaseFirstLetter = (lowercaseWord.slice(0, 1)).toUpperCase(); //slice off first letter and make it uppercase
  let restOfWord = lowercaseWord.slice(1); //get rest of the word (exclude first letter)
  return (uppercaseFirstLetter + restOfWord); //join first (uppercase) letter and rest of the word (lowercase)
}

function getPlayerChoice() {
  let playerInput = prompt('Input your choice:');
  return ((checkPlayerChoice(uppercaseFirstLetter(playerInput)) != 0) ? uppercaseFirstLetter(playerInput) : 0);
}

function singleRound (playerSelection, computerSelection) {
  if (!playerSelection) {
    return 'play the game man';
  }
  else if (playerSelection === computerSelection) {
    return 'Tie!';
  }
  return ('computer choice: ' + computerSelection);
}

console.log(singleRound(getPlayerChoice(), getComputerChoice()));