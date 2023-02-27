const choices = ["rock", "paper", "scissor"];
const drawMessage = "It's a draw";
const winMessage = "You win!";
const loseMessage = "You lose :(";
const invalidMessage = "Invalid Input";
let playerSelection, computerSelection;

function getComputerChoice() {
  let choiceIndex = Math.floor(Math.random() * 3);
  return choices[choiceIndex];
}

function getPlayerChoice(e) {
  if (this.id == "rock") {
    return "rock";
  } else if (this.id == "paper") {
    return "paper";
  } else if (this.id == "scissor") {
    return "scissor";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return drawMessage;
  } else if (
    (playerSelection == choices[0] && computerSelection == choices[2]) ||
    (playerSelection == choices[1] && computerSelection == choices[0]) ||
    (playerSelection == choices[2] && computerSelection == choices[1])
  ) {
    return winMessage;
  } else {
    return loseMessage;
  }
}

function game(e) {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", game);
});

// function playRound(playerSelection, computerSelection) {
//   console.log(
//     "Player chose: " +
//       playerSelection +
//       "\nComputer chose: " +
//       computerSelection
//   );
//   if (playerSelection == computerSelection) {
//     return drawMessage;
//   }
//   if (
//     (playerSelection == choices[0] && computerSelection == choices[2]) ||
//     (playerSelection == choices[1] && computerSelection == choices[0]) ||
//     (playerSelection == choices[2] && computerSelection == choices[1])
//   ) {
//     return winMessage;
//   }
//   return loseMessage;
// }

// function isValidSelection(playerSelection) {
//   if (playerSelection == null) return false;
//   playerSelection = playerSelection.toLowerCase();
//   for (let i = 0; i < 3; i++) {
//     if (choices[i] == playerSelection) return true;
//   }
//   return false;
// }

// function game() {
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt("Enter your choice:");
//     if (isValidSelection(playerSelection) == false) {
//       console.log(invalidMessage);
//       continue;
//     }
//     playerSelection = playerSelection.toLowerCase();
//     let computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//   }
// }

// game();
