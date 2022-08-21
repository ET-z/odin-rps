function main() {
    let random = () => Math.floor(Math.random() * 3);

    let choice = ["rock", "paper", "scissors"];
    
    const rock = document.querySelector(".rock");
    rock.addEventListener("click", playRound);

    const paper = document.querySelector(".paper");
    paper.addEventListener("click", playRound);

    const scissors = document.querySelector(".scissors");
    scissors.addEventListener("click", playRound);

    function playRound(event) {
        let x = event.target.innerHTML.toLowerCase();
        console.log(event.target);
        console.log(x);
        let playerSelection = choice.indexOf(x);
        console.log(playerSelection);

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
    }
            
    let playerScore = 0;
    let computerScore = 0;
    

    for (let i = 0; i < 5;) {
        if (outcome == "Player wins this round!") {
            i++
            playerScore += 1;
        } else if (outcome == "Computer wins this round!") {
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