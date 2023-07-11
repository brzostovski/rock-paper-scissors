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

function test() {
  const btns = document.querySelectorAll('.game-btn');
  const result = document.querySelector('.result');
  const score = document.querySelector('.score');

  let playerScore = 0;
  let computerScore = 0;

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
      score.textContent = `Computer score: ${computerScore}; Player score: ${playerScore}`
    })
  })
}

test();