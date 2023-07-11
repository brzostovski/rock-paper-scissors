function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let choice = "";
  switch (randomNumber) {
    case 0:
      choice = 'rock';
      break;
    case 1:
      choice = 'paper';
      break;
    case 2:
      choice = 'scissors';
      break;
  }
  return choice;
}

function singleRound (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 1;
  }
  else if ((playerSelection === 'paper' && computerSelection === 'scissors') ||
  (playerSelection === 'scissors' && computerSelection === 'rock') ||
  (playerSelection === 'rock' && computerSelection === 'paper')) {
    return 2;
  }
  return 3; //if player didn't tie or lose, they had to win
}

function uppercaseFirstLetter (word) {
  let lowercaseWord = word.toLowerCase();
  let uppercaseFirstLetter = (lowercaseWord.slice(0, 1)).toUpperCase();
  let restOfWord = lowercaseWord.slice(1);
  return (uppercaseFirstLetter + restOfWord);
}

const container = document.querySelector('.container');
const btns = document.querySelectorAll('.game-btn');
const result = document.querySelector('.result');
const score = document.querySelector('.score');

let playerScore = 0;
let computerScore = 0;

score.textContent = `Computer score: ${computerScore}; Player score: ${playerScore}`;

btns.forEach((btn) => {
  btn.addEventListener('click', function(e) {
    let computerSelection = getComputerChoice();
    let playerSelection = e.target.id;
    roundOutcome = singleRound(playerSelection, computerSelection);
    switch (roundOutcome) {
      case 1:
        result.textContent = 'Tie!';
        break;
      case 2:
        computerScore += 1;
        result.textContent = 'You Lose! ' + uppercaseFirstLetter(computerSelection) + ' beats ' + playerSelection;
        break;
      case 3:
        playerScore += 1;
        result.textContent = 'You Win! ' + uppercaseFirstLetter(playerSelection) + ' beats ' + computerSelection;
        break;
    }

    score.textContent = `Computer score: ${computerScore}; Player score: ${playerScore}`;

    if ((playerScore >= 5) || (computerScore >= 5)) {

      btns.forEach((btn) => {
        btn.remove();
      })

      result.textContent = 'GAME OVER';

      if (playerScore > computerScore) {
        score.textContent = `YOU WIN ${playerScore} TO ${computerScore}`;
      } else {
        score.textContent = `YOU LOSE ${computerScore} TO ${playerScore}`;
      }
      playerScore = 0;
      computerScore = 0;
    }
  })
})