// Have computer randomly select rock, paper, or scissors

function computeSelection () {
  let selection = "";

  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      selection = "ROCK";
      break;
    case 2:
      selection = "PAPER";
      break;
    case 3:
      selection = "SCISSORS";
      break;
    default:
      console.log("No selection made");
  }

  return selection;
}

// Play single round of rock paper scissors against computer

function playRound() {
  let playerSelection = "";
  let computerSelection = "";
  let outcomeMessage = "";
  let outcomeCase = 0;
  
  computerSelection = computeSelection();
  playerSelection = prompt("Choose rock, paper, or scissors").toUpperCase();

  while (playerSelection !== "ROCK" && 
         playerSelection !== "PAPER" && 
         playerSelection !== "SCISSORS") {
    playerSelection = prompt("Choose rock, paper, or scissors").toUpperCase();
  }

  console.log("Player: " + playerSelection + " | Computer: " + computerSelection);
  
  if (playerSelection === computerSelection) {
    outcomeMessage = "It's a tie!";
    outcomeCase = 0;
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
             playerSelection === "PAPER" && computerSelection === "ROCK" ||
             playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    outcomeMessage = "You win! " + playerSelection + " beats " + computerSelection;
    outcomeCase = 1;
  } else {
    outcomeMessage = "You lose! " + computerSelection + " beats " + playerSelection;
    outcomeCase = 2;
  }
  
  console.log(outcomeMessage);

  return outcomeCase;
}

// Play best-of-5 game of rock paper scissors against computer

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let outcome = 0;
  let finalScore = "";
  let winner = "";
  let loser = "";

  while (playerScore < 3 && computerScore < 3) {
    switch (outcome = playRound()) {
      case 1:
        playerScore++;
        break;
      case 2:
        computerScore++;
        break;
      default:
    }

    if (playerScore < 3 && computerScore < 3) {
      console.log("Current Score: Player " + playerScore + " - " + computerScore + " Computer");
      console.log("NEXT ROUND");
    }
  }

  if (playerScore === 3) {
    winner = "Player";
    loser = "Computer";
    console.log("HOORAY! You won the game!");
  } else {
    winner = "Computer";
    loser = "Player";
    console.log("SORRY! You lost the game!");
  }

  finalScore = "Final Score: Player " + playerScore + " - " + computerScore + " Computer";
  console.log(finalScore);

  return "Winner: " + winner + " | Loser: " + loser;
}

// Test randomness of computeSelection()
/*
function testRandomness() {
  let outcome = "";
  let rockCount = 0;
  let paperCount = 0;
  let scissorsCount = 0;

  for (i = 0; i < 100000; i++) {
    outcome = computeSelection();
    if (outcome === "Rock") {
      rockCount++;
    } else if (outcome === "Paper") {
      paperCount++;
    } else if (outcome === "Scissors") {
      scissorsCount++;
    } else {}
  }

  console.log("Rock: " + rockCount);
  console.log("Paper: " + paperCount);
  console.log("Scissors: " + scissorsCount);
}
*/