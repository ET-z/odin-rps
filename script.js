let playerScore = 0;
let computerScore = 0;
function main() {
    let random = () => Math.floor(Math.random() * 3);

    let choice = ["rock", "paper", "scissors"];
    
    const rock = document.querySelector(".rock");
    rock.addEventListener("click", playRound);

    const paper = document.querySelector(".paper");
    paper.addEventListener("click", playRound);

    const scissors = document.querySelector(".scissors");
    scissors.addEventListener("click", playRound);

    let pscore = document.querySelector("#player-score");
    let cscore = document.querySelector("#computer-score");

    let outcomeText = document.querySelector("#outcome");
    
    function playRound(event) {
        let x = event.target.innerHTML.toLowerCase();

        let playerSelection = choice.indexOf(x);

        let computerSelection = random();

        let outcome;
        if (playerSelection === 0 && computerSelection === 2) {
            outcome = "Player wins this round!"
        } else if (playerSelection === 1 && computerSelection === 0) {
            outcome = "Player wins this round!"
        } else if (playerSelection === 2 && computerSelection === 1) {
            outcome = "Player wins this round!"
        } else if (playerSelection === computerSelection) {
            outcome = "It's a tie!"
        } else {
            outcome = "Computer wins this round!"
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

        if (playerScore + computerScore === 10) {
            if (playerScore > computerScore) {
                // display player as winner of match
                // set scores to 0
            } else {
                // display computer as winner of match
                // set scores to 0
            }
        }
    }
}

const play = document.querySelector("#play");

play.addEventListener("click", playGame);

function playGame() {
    document.querySelector("#choices").style.display = "flex";
    play.style.display = "none";
    main();
}