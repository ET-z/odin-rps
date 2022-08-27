let playerScore = 0;
let computerScore = 0;
function main() {
    let random = () => Math.floor(Math.random() * 3);

    let choiceSet = ["rock", "paper", "scissors"];

    const body = document.querySelector("body");
    
    const rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
        let playerChoice = 0;
        playRound(playerChoice);
    });

    const paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
        let playerChoice = 1;
        playRound(playerChoice);
    });

    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
        let playerChoice = 2;
        playRound(playerChoice);
    });

    let pscore = document.querySelector("#player-score");
    let cscore = document.querySelector("#computer-score");
    pscore.textContent = "Your score: 0";
    cscore.textContent = "Computer score: 0";

    let outcomeText = document.querySelector("#outcome");

    let choices = document.querySelector("#choices");
    let scores = document.querySelector("#scores");
    
    function playRound(playerChoice) {
        let playerSelection = playerChoice;
        console.log(playerSelection)

        let computerSelection = random();
        console.log(computerSelection)

        let outcome;
        if (playerSelection === 0 && computerSelection === 2) {
            outcome = "Player wins this round!"
            body.style.backgroundColor = "#91f788";
        } else if (playerSelection === 1 && computerSelection === 0) {
            outcome = "Player wins this round!"
            body.style.backgroundColor = "#91f788";
        } else if (playerSelection === 2 && computerSelection === 1) {
            outcome = "Player wins this round!"
            body.style.backgroundColor = "#91f788";
        } else if (playerSelection === computerSelection) {
            outcome = "It's a tie!"
            body.style.backgroundColor = "#ffcd82";
        } else {
            outcome = "Computer wins this round!"
            body.style.backgroundColor = "#ff8682";
        }
        console.log(outcome);

        if (outcome === "Player wins this round!") {
            playerScore += 1
        } else if (outcome === "Computer wins this round!") {
            computerScore += 1
        } else {
            // pass
        }

        pscore.textContent = "Your score: " + playerScore;
        cscore.textContent = "Computer score: " + computerScore;
        outcomeText.textContent = outcome;

        let replayButton;
        function replay() {
            replayButton = document.createElement("button");
            replayButton.classList.add("replayButton");
            body.appendChild(replayButton);
            replayButton.textContent = "Replay";

            replayButton.addEventListener("click", () => {
                choices.style.display = "flex";
                scores.style.display = "";
                outcomeText.style.display = "";
                outcomeText.textContent = "";
                winner.style.display = "none";
                replayButton.style.display = "none";
            });
        }
        let winner;
        function displayWinner() {
            choices.style.display = "none";
            scores.style.display = "none";
            outcomeText.style.display = "none";
            winner = document.createElement("p");
            winner.classList.add("winnerText");
            body.appendChild(winner);
            body.style.backgroundColor = "whitesmoke";

            playerScore = 0;
            computerScore = 0;
            pscore.textContent = "Your score: " + playerScore;
            cscore.textContent = "Computer score: " + computerScore;
        
            if (playerScore > computerScore) {
                winner.textContent = "Player Wins the Match!";
            } else {
                winner.textContent = "Computer Wins the Match!";
            };
        };

        if (playerScore + computerScore === 10) {
            displayWinner();
            replay();
        };
    };
};

const play = document.querySelector("#play");

play.addEventListener("click", playGame);

function playGame() {
    document.querySelector("#choices").style.display = "flex";
    play.style.display = "none";
    document.querySelector("#logo").style.display = "none";
    main();
}