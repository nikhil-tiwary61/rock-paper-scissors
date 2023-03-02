const choices = ["rock", "paper", "scissor"];
const drawMessage = "It's a draw";
const winMessage = "You win!";
const loseMessage = "You lose :(";
const invalidMessage = "Invalid Input";
let playerSelection,
  computerSelection,
  playerScore = 0,
  computerScore = 0,
  winningMessage = "";

function getComputerChoice() {
  let choiceIndex = Math.floor(Math.random() * 3);
  return choices[choiceIndex];
}

function getPlayerChoice(obj) {
  if (obj.id == "rock") {
    return "rock";
  } else if (obj.id == "paper") {
    return "paper";
  } else if (obj.id == "scissor") {
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
    playerScore += 1;
    return winMessage;
  } else {
    computerScore += 1;
    return loseMessage;
  }
}

// function displayMessage() {
//   let message = `<div class="winner">${winningMessage}</div>
//   <div><button class="newgame">NEW GAME</button></div>`;
//   body.innerHTML = message;
//   document.getElementById("newgame").addEventListener("click", pageReload);
// }

// function pageReload() {
//   window.location.reload();
// }

function game(e) {
  playerSelection = getPlayerChoice(this);
  computerSelection = getComputerChoice();
  document.querySelector(".playerDecision").innerHTML = playerSelection;
  document.querySelector(".computerDecision").innerHTML = computerSelection;
  //Display player's choice
  if (playerSelection == "rock") {
    document.querySelector(".playerDecision").innerHTML =
      "<img src='images/rock-30.png' alt='Rock'>";
  } else if (playerSelection == "paper") {
    document.querySelector(".playerDecision").innerHTML =
      "<img src='images/paper-30.png' alt='Rock'>";
  } else if (playerSelection == "scissor") {
    document.querySelector(".playerDecision").innerHTML =
      "<img src='images/scissors-30.png' alt='Rock'>";
  }
  //Display computer's choice
  if (computerSelection == "rock") {
    document.querySelector(".computerDecision").innerHTML =
      "<img src='images/rock-30.png' alt='Rock'>";
  } else if (computerSelection == "paper") {
    document.querySelector(".computerDecision").innerHTML =
      "<img src='images/paper-30.png' alt='Rock'>";
  } else if (computerSelection == "scissor") {
    document.querySelector(".computerDecision").innerHTML =
      "<img src='images/scissors-30.png' alt='Rock'>";
  }
  document.querySelector(".result").innerHTML = playRound(
    playerSelection,
    computerSelection
  );
  //Updates score
  document.querySelector(".playerScore").innerHTML = playerScore;
  document.querySelector(".computerScore").innerHTML = computerScore;

  // if (playerScore == 3) {
  //   winningMessage = "YAY! You Win.";
  // }
  // if (computerScore == 3) {
  //   winningMessage = "You lost against a bot";
  // }
  // if (Math.max(playerScore, computerScore) == 3) {
  //   displayMessage();
  // }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", game);
});
