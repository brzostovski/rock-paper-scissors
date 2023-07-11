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
    return 'tie';
  }
  else if ((playerSelection === 'paper' && computerSelection === 'scissors') ||
  (playerSelection === 'scissors' && computerSelection === 'rock') ||
  (playerSelection === 'rock' && computerSelection === 'paper')) {
    return 'playerLose';
  }
  return 'playerWin'; //if player didn't tie or lose, they had to win
}

function uppercaseFirstLetter (word) {
  let lowercaseWord = word.toLowerCase();
  let uppercaseFirstLetter = (lowercaseWord.slice(0, 1)).toUpperCase();
  let restOfWord = lowercaseWord.slice(1);
  return (uppercaseFirstLetter + restOfWord);
}

const container = document.querySelector('.tiles-container');
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
      case 'tie':
        result.textContent = 'Tie!';
        break;
      case 'playerLose':
        computerScore += 1;
        result.textContent = 'You Lose! ' + uppercaseFirstLetter(computerSelection) + ' beats ' + playerSelection;
        break;
      case 'playerWin':
        playerScore += 1;
        result.textContent = 'You Win! ' + uppercaseFirstLetter(playerSelection) + ' beats ' + computerSelection;
        break;
    }

    score.textContent = `Computer score: ${computerScore}; Player score: ${playerScore}`;

    if ((playerScore >= 5) || (computerScore >= 5)) {

      btns.forEach((btn) => {
        btn.style.display = 'none'; //add inline style to hide buttons
      })

      result.textContent = 'GAME OVER';

      if (playerScore > computerScore) {
        score.textContent = `YOU WIN ${playerScore} TO ${computerScore}`;
      } else {
        score.textContent = `YOU LOSE ${computerScore} TO ${playerScore}`;
      }
      playerScore = 0; //reset scores in anticipation of reset
      computerScore = 0;

      const playAgain = document.createElement('button');
      playAgain.classList.add('game-btn');
      playAgain.textContent = 'play again';
      container.appendChild(playAgain);

      playAgain.addEventListener('click', function() {
        btns.forEach((btn) => {
          btn.removeAttribute('style'); //remove inline style to show buttons again
        })

        playAgain.remove(); //delete reset button

        score.textContent = `Computer score: ${computerScore}; Player score: ${playerScore}`;
        result.textContent = "";
      })
    }
  })
})