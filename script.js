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

function getPlayerChoice() {
  const playerInput = prompt('Input your choice:').toLowerCase();
  return ((playerInput != 0) ?
    playerInput :
    0);
}

function singleRound (playerSelection, computerSelection) {
  if (!playerSelection) { //if player selection function returns 'false' it means invalid input and round cannot be played
    return 0;
  }
  else if (playerSelection === computerSelection) {
    return 1;
  }
  else if ((playerSelection === 'paper' && computerSelection === 'scissors') ||
  (playerSelection === 'scissors' && computerSelection === 'rock') ||
  (playerSelection === 'rock' && computerSelection === 'paper')) {
    return 2;
  }
  return 3; //if player didn't tie or lose, they had to win
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  //for (let i = 0; i < 5; i++) {
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
  //}
  console.log('GAME RESULT:');
  if (playerScore > computerScore) {
    console.log('You won the game ' + playerScore + ' to ' + computerScore + '!');
  }
  else if (playerScore < computerScore) {
    console.log('You lost the game ' + playerScore + ' to ' + computerScore + ' :c');
  }
  else {
    console.log('Tie (' + playerScore + ' to ' + computerScore + ')');
  }
}

const btns = document.querySelectorAll('.game-btn');
btns.forEach((btn) => {
  btn.addEventListener('click', function(e) {
    console.log(singleRound(e.target.id, getComputerChoice()));
  })
})

/*const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors')

btnRock.addEventListener('click', () => {
  console.log(singleRound('rock', getComputerChoice()));
})

btnPaper.addEventListener('click', () => {
  console.log(singleRound('paper', getComputerChoice()));
})

btnScissors.addEventListener('click', () => {
  console.log(singleRound('scissors', getComputerChoice()));
})

btnRock.addEventListener('click', function(e) {
  console.log(e.target);
})*/

//game();