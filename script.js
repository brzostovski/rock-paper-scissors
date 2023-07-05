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

function getComputerChoice () {
  let randomNumber = Math.floor(Math.random() * 3); //generate random value between 0 and 1; multiply it by 3 and round down to whole number
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

//console.log(getComputerChoice());