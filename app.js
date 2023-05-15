const gameWinSong = new Audio("assets/audio/victory.mp3");
const gameLoseSong = new Audio("assets/audio/lose.mp3");
const choices = ["rock", "paper", "scissor"];
const drawMessage = "It's a draw";
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
    let winMessage = `${playerSelection} beats ${computerSelection}`;
    return winMessage;
  } else {
    computerScore += 1;
    let loseMessage = `${computerSelection} beats ${playerSelection}`;
    return loseMessage;
  }
}

function displayMessage(win) {
  let message = `<div class="result-screen"><div class="winner">${winningMessage}</div>
  <div><button class="newgame">NEW GAME</button></div></div>`;
  document.body.innerHTML = message;
  win ? gameWinSong.play() : gameLoseSong.play();
  document.querySelector(".newgame").addEventListener("click", pageReload);
}

function pageReload(e) {
  window.location.reload();
}

function game(e) {
  playerSelection = getPlayerChoice(this);
  computerSelection = getComputerChoice();
  document.querySelector(".playerDecision").innerHTML = playerSelection;
  document.querySelector(".computerDecision").innerHTML = computerSelection;
  //Display player's choice
  if (playerSelection == "rock") {
    document.querySelector(".playerDecision").innerHTML =
      "<img class='image-icon' src='./assets/images/rock.png' alt='Rock'>";
  } else if (playerSelection == "paper") {
    document.querySelector(".playerDecision").innerHTML =
      "<img class='image-icon' src='./assets/images/paper.png' alt='Paper'>";
  } else if (playerSelection == "scissor") {
    document.querySelector(".playerDecision").innerHTML =
      "<img class='image-icon' src='./assets/images/scissors.png' alt='Scissors'>";
  }
  //Display computer's choice
  if (computerSelection == "rock") {
    document.querySelector(".computerDecision").innerHTML =
      "<img class='image-icon' src='./assets/images/rock.png' alt='Rock'>";
  } else if (computerSelection == "paper") {
    document.querySelector(".computerDecision").innerHTML =
      "<img class='image-icon' src='./assets/images/paper.png' alt='Paper'>";
  } else if (computerSelection == "scissor") {
    document.querySelector(".computerDecision").innerHTML =
      "<img class='image-icon' src='./assets/images/scissors.png' alt='Scissors'>";
  }
  document.querySelector(".result").innerHTML = playRound(
    playerSelection,
    computerSelection
  );
  //Updates score
  document.querySelector(".playerScore").innerHTML = playerScore;
  document.querySelector(".computerScore").innerHTML = computerScore;

  let win;
  if (Math.max(playerScore, computerScore) == 5 && playerScore == 5) {
    winningMessage = `YAY! You win`;
    win = true;
  } else {
    winningMessage = `You lose`;
    win = false;
  }
  // winningMessage =
  //   Math.max(playerScore, computerScore) == 5 && playerScore == 5
  //     ? "YAY! You win."
  //     : "You lose";
  Math.max(playerScore, computerScore) == 5 ? displayMessage(win) : null;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", game);
});
