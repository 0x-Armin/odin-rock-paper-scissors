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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

  switch(playerSelection) {
    case 'Rock':
      switch(computerSelection) {
        case 'Rock':
          console.log(getTieMessage(playerSelection, computerSelection));
          return 0;
        case 'Paper':
          console.log(getLossMessage(playerSelection, computerSelection));
          return 0;
        default:
          console.log(getWinMesssage(playerSelection, computerSelection));
          return 1;
      }
    case 'Paper':
      switch(computerSelection) {
        case 'Rock':
          console.log(getWinMesssage(playerSelection, computerSelection));
          return 1;
        case 'Paper':
          console.log(getTieMessage(playerSelection, computerSelection));
          return 0;
        default:
          console.log(getLossMessage(playerSelection, computerSelection));
          return 0;
      }
    case 'Scissors':
      switch(computerSelection) {
        case 'Rock':
          console.log(getLossMessage(playerSelection, computerSelection));
          return 0;
        case 'Paper':
          console.log(getWinMesssage(playerSelection, computerSelection));
          return 1;
        default:
          console.log(getTieMessage(playerSelection, computerSelection));
          return 0;
      }
    default:
      console.log("Invalid input! Please enter rock, paper or scissors.");
      return 0;
  }
}

function startRound(e) {
  const playerSelection = this.className;
  const computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);
}

// logic of gameplay here
let playerScore = 0, computerScore = 0;

const btns = Array.from(document.querySelectorAll('button'));
btns.forEach(btn => btn.addEventListener('click', startRound));