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

function game() {
  let playerScore = 0;

  for (let i=0; i<5; i++) {
    const playerSelection = prompt("Pick rock, paper or scissors!", "rock");
    const computerSelection = getComputerChoice();
    console.log(`You pick ${playerSelection} and the computer picked ${computerSelection}`);
    
    let outcome = playRound(playerSelection, computerSelection);
    if (outcome) {
      playerScore += 1;
    }
  }

  if (playerScore >= 3) {
    console.log(`You are the winner! You've won ${playerScore} out of 5 rounds.`)
  } else {
    console.log(`You are the loser! You've not won ${5-playerScore} out of 5 rounds.`)
  }
}