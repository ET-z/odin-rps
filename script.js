let random = () => Math.floor(Math.random() * 3);

// let choice = ["rock", "paper", "scissors"]

// rock beats scissors (-2)
// paper beats rock (-1)
// scissors beats paper (1)
// tie (0)

function getComputerChoice() {
    let computerChoice = random();
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Pick Between Rock Paper Scissors").toLowerCase();
    switch (playerChoice) {
        case "rock":
            playerChoice = 0;
            break;
        case "paper":
            playerChoice = 1;
            break;
        case "scissors":
            playerChoice = 2;
            break;
        default:
            console.log("Invalid Input: Please Try Again")
            getPlayerChoice();
    }
    return playerChoice;
}

function round(playerSelection, computerSelection) {
    const result = playerSelection - computerSelection
    switch (result) {
        case -2 && playerSelection === 0:
            comsole.log("Player Wins");
            break;
        case -1 && playerSelection === 1:
            console.log("Player Wins");
            break;
        case 1 && playerSelection === 2:
            console.log("Player Wins");
            break;
        default:
            console.log("Computer Wins")
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
round(playerSelection, computerSelection);
