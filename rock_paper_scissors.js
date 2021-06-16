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

// Play single round of rock paper scissors
function playRound() {
  let playerSelection = "";
  let computerSelection = "";
  let outcome = "";
  
  computerSelection = computeSelection();
  playerSelection = prompt("Choose rock, paper, or scissors").toUpperCase();

  while (playerSelection !== "ROCK" && 
         playerSelection !== "PAPER" && 
         playerSelection !== "SCISSORS") {
    playerSelection = prompt("Choose rock, paper, or scissors").toUpperCase();
  }

  console.log("Player: " + playerSelection + " | Computer: " + computerSelection);
  
  if (playerSelection === computerSelection) {
    outcome = "It's a tie!";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
             playerSelection === "PAPER" && computerSelection === "ROCK" ||
             playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    outcome = "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    outcome = "You lose! " + computerSelection + " beats " + playerSelection;
  }
  
  return console.log(outcome);
}

// Play best-of-5 game of rock paper scissors
// function playGame() {

// }

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