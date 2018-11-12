const playerIcons = Array.from(document.querySelectorAll(".playerIcon"));
const playerOutcome = document.getElementById("playerOutcome");
const computerOutcome = document.getElementById("computerOutcome");
const score = document.getElementById("score");
const reset = document.getElementById("reset");

let win = 0;
let draw = 0;
let lose = 0;

var playerName = prompt("Please enter your name");
if (playerName != null) {
    document.getElementById("h1PlayerName").innerHTML = playerName + ":";
}

const choose = (event) => {
    const choice = event.target;
    if (choice == playerIcons[0]) {
        playerOutcome.textContent = "Rock";
    } else if (choice == playerIcons[1]) {
        playerOutcome.textContent = "Paper";
    } else if (choice == playerIcons[2]) {
        playerOutcome.textContent = "Scissors";
    }
    computerChoice();
    checkWinner();
}

const computerChoice = () => {
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) {
        computerOutcome.textContent = "Rock";
    } else if (choice == 2) {
        computerOutcome.textContent = "Paper";
    } else if (choice == 3) {
        computerOutcome.textContent = "Scissors";
    }
}

const checkWinner = () => {
    if (playerOutcome.textContent == "Rock" && computerOutcome.textContent == "Scissors" || playerOutcome.textContent == "Paper" && computerOutcome.textContent == "Rock" || playerOutcome.textContent == "Scissors" && computerOutcome.textContent == "Paper") {
        console.log("Player Wins");
        win++;
    } else if (computerOutcome.textContent == "Rock" && playerOutcome.textContent == "Scissors" || computerOutcome.textContent == "Paper" && playerOutcome.textContent == "Rock" || computerOutcome.textContent == "Scissors" && playerOutcome.textContent == "Paper") {
        console.log("Computer Wins");
        lose++;
    } else {
        console.log("Draw");
        draw++;
    }
    updateScore(win, lose, draw);
}

const updateScore = (win, lose, draw) => {
    score.textContent = `Wins: ${win}    Draws: ${draw}    Losses: ${lose}`;
}

reset.addEventListener("click", () => {
    win = 0;
    draw = 0;
    lose = 0;
    playerOutcome.textContent = "-";
    computerOutcome.textContent = "-";
    updateScore(win, draw, lose);
})

playerIcons.forEach(icon => icon.addEventListener("click", choose));