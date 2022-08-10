function main() {
    let random = () => Math.floor(Math.random() * 3);
    
    let choice = ["rock", "paper", "scissors"];
    
    function getPlayerChoice() {
        let x = prompt("Pick Between Rock, Paper, and Scissors").toLowerCase();
        let pick = choice.indexOf(x);
        return pick;
    }
    
    function playRound(playerSelection, computerSelection) {
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
    
        return outcome;
    }
    
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5;) {
        let playerSelection = getPlayerChoice();
        let computerSelection = random();
        let round = playRound(playerSelection, computerSelection);
        console.log(round);
    
        if (round == "Player wins this round!") {
            i++
            playerScore += 1;
        } else if (round == "Computer wins this round!") {
            i++
            computerScore += 1;
        } else {
            // pass
        }
            
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }
    
    if (playerScore > computerScore) {
        console.log("Player Win's the Game!");
    } else {
        console.log("Computer Win's the Game!");
    }
    
}

main();

let restart = prompt("Would you like to play again?");
restart.toLowerCase();

if (restart == "yes") {
    main();
} else {
    alert("Thank You for playing this game!")
}