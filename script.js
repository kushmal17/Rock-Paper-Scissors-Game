const container = document.querySelector(".container");
const userImg = document.querySelector(".user img");
const botImg = document.querySelector(".bot img");
const resultText = document.querySelector(".result");
const options = document.querySelectorAll(".option");

const choices = ["rock", "paper", "scissors"];

const winMap = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
};

options.forEach(option => {
  option.addEventListener("click", () => playGame(option.dataset.choice));
});

function playGame(userChoice) {
  setActive(userChoice);

  resultText.textContent = "Waiting...";
  userImg.src = botImg.src = "rock.png";
  container.classList.add("shake");

  setTimeout(() => {
    container.classList.remove("shake");

    const botChoice = choices[Math.floor(Math.random() * 3)];

    userImg.src = `${userChoice}.png`;
    botImg.src = `${botChoice}.png`;

    if (userChoice === botChoice) {
      resultText.textContent = "It's a Draw 😐";
    } else if (winMap[userChoice] === botChoice) {
      resultText.textContent = "You Win 🎉";
    } else {
      resultText.textContent = "Bot Wins 🤖";
    }
  }, 1200);
}

function setActive(choice) {
  options.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.choice === choice);
  });
}
