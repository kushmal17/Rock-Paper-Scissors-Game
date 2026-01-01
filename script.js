const container = document.querySelector(".container");
const userImg = document.querySelector(".user img");
const botImg = document.querySelector(".bot img");
const resultText = document.querySelector(".result");
const options = document.querySelectorAll(".option");

const userScoreEl = document.getElementById("userScore");
const botScoreEl = document.getElementById("botScore");
const drawScoreEl = document.getElementById("drawScore");

let userScore = 0;
let botScore = 0;
let drawScore = 0;
const WIN_LIMIT = 3;

const choices = ["rock", "paper", "scissors"];
const winMap = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
};

options.forEach(btn => {
  btn.addEventListener("click", () => playGame(btn.dataset.choice));
});

function playGame(userChoice) {
  container.classList.add("shake");
  resultText.textContent = "Waiting...";

  setTimeout(() => {
    container.classList.remove("shake");

    const botChoice = choices[Math.floor(Math.random() * 3)];
    userImg.src = `${userChoice}.png`;
    botImg.src = `${botChoice}.png`;

    if (userChoice === botChoice) {
      drawScore++;
      drawScoreEl.textContent = drawScore;
      resultText.textContent = "Draw 😐";
    } else if (winMap[userChoice] === botChoice) {
      userScore++;
      userScoreEl.textContent = userScore;
      resultText.textContent = "You Win 🎉";
    } else {
      botScore++;
      botScoreEl.textContent = botScore;
      resultText.textContent = "Bot Wins 🤖";
    }

    if (userScore === WIN_LIMIT || botScore === WIN_LIMIT) {
      endGame();
    }
  }, 1200);
}

function endGame() {
  options.forEach(btn => btn.disabled = true);
  resultText.textContent =
    userScore === WIN_LIMIT ? "🏆 YOU WON THE MATCH!" : "🤖 BOT WON THE MATCH!";
}

/* RESET */
document.getElementById("resetBtn").addEventListener("click", () => {
  userScore = botScore = drawScore = 0;
  userScoreEl.textContent = botScoreEl.textContent = drawScoreEl.textContent = 0;
  resultText.textContent = "Make your move!";
  userImg.src = botImg.src = "rock.png";
  options.forEach(btn => btn.disabled = false);
});
