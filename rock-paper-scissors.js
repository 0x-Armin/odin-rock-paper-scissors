function getComputerChoice() {
  actions = ['Rock', 'Paper', 'Scissors'];
  return actions[Math.floor(Math.random()*actions.length)];
}

function getTieMessage(playerSelection, computerSelection) {
  return `It's a tie! ${playerSelection} and ${computerSelection} are a tie.`
}

function getWinMesssage(playerSelection, computerSelection) {
  return `You win! ${playerSelection} beats ${computerSelection}.`
}

function getLossMessage(playerSelection, computerSelection) {
  return `You lose! ${playerSelection} loses to ${computerSelection}.`
}

function getOutcome(playerSelection, computerSelection) {
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

  switch(playerSelection) {
    case 'Rock':
      switch(computerSelection) {
        case 'Rock':
          return getTieMessage(playerSelection, computerSelection);
        case 'Paper':
          computerScore += 1;
          return getLossMessage(playerSelection, computerSelection);
        default:
          playerScore += 1;
          return getWinMesssage(playerSelection, computerSelection);
      }
    case 'Paper':
      switch(computerSelection) {
        case 'Rock':
          playerScore += 1;
          return getWinMesssage(playerSelection, computerSelection);
        case 'Paper':
          return getTieMessage(playerSelection, computerSelection);
        default:
          computerScore += 1;
          return getLossMessage(playerSelection, computerSelection);
      }
    case 'Scissors':
      switch(computerSelection) {
        case 'Rock':
          computerScore += 1;
          return getLossMessage(playerSelection, computerSelection);
        case 'Paper':
          playerScore += 1;
          return getWinMesssage(playerSelection, computerSelection);
        default:
          return getTieMessage(playerSelection, computerSelection);
      }
    default:
      return "Invalid input! Please enter rock, paper or scissors.";
  }
}

function checkGame() {
  if (playerScore === 5) alert('You have won the game!');
  if (computerScore === 5) alert ('You have lost the game!');
}

function playRound(e) {
  const playerSelection = this.className;
  const computerSelection = getComputerChoice();

  const outcome = getOutcome(playerSelection, computerSelection);
  document.getElementById('result').textContent = outcome;
  document.getElementById('running-score').textContent = `Score: Player ${playerScore} | Computer ${computerScore}`;

  checkGame();
}

// logic of gameplay here
let playerScore = 0, computerScore = 0;

const btns = Array.from(document.querySelectorAll('button'));
btns.forEach(btn => btn.addEventListener('click', playRound));