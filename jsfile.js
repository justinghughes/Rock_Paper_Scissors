    let playerScore = 0;
    let computerScore = 0;
    let playerChoice;

    const rockBtn = document.querySelector('#btn-rock');
    rockBtn.addEventListener('click', () => {
        playerChoice = "rock";
        return game();
    });

    const paperBtn = document.querySelector('#btn-paper');
    paperBtn.addEventListener('click', () => {
        playerChoice = "paper";
        return game();
    });

    const scissorsBtn = document.querySelector('#btn-scissors');
    scissorsBtn.addEventListener('click', () => {
        playerChoice = "scissors";
        return game();
    });

    function game() {
        const computerChoice = computerSelection();
        return playRound(playerChoice,computerChoice);
    }


    function computerSelection() {
        let random = Math.floor(Math.random() * 3) + 1;
        if (random === 1) {
            console.log("rock");
            return "rock";
        } else if (random === 2) {
            console.log("paper");
            return "paper";
        } else {
            console.log("scissors");
            return "scissors";
        }
    }

    function playRound(playerChoice,computerChoice) {
        if (playerChoice === "rock") {
            if (computerChoice === "paper") {
                computerScore += 1;
                console.log("You lose! Paper beats rock! Player Score: " + playerScore + " Computer Score " + computerScore); 
            } else if (computerChoice === "scissors") {
                playerScore += 1;
                console.log("You Win! Rock beats scissors! Player Score: " + playerScore + " Computer Score " + computerScore); 
            } else {
                console.log("Tie! Player Score " + playerScore + " Computer Score " + computerScore);
            }
        }
        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                playerScore += 1;
                console.log("You win! Paper beats rock! Player Score: " + playerScore + " Computer Score " + computerScore);
            } else if (computerChoice === "scissors") {
                computerScore += 1;
                console.log("You lose! Scissors beats paper! Player Score: " + playerScore + " Computer Score " + computerScore);
            } else {
                console.log("Tie! Player Score " + playerScore + " Computer Score " + computerScore);
            }
        }
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                computerScore += 1
                console.log("You lose! Rock beats scissors! Player Score: " + playerScore + " Computer Score " + computerScore);
            } else if (computerChoice === "paper") {
                playerScore += 1;
                console.log("You win! Scissors beats paper! Player Score: " + playerScore + " Computer Score " + computerScore);
            } else {
                console.log("Tie! Player Score " + playerScore + " Computer Score " + computerScore);
            }
        }
    }

    // function game() {
    //         const computerChoice = computerSelection();
    //         return playRound(playerChoice,computerChoice);
    // }

   
    function finalResult(playerScore,computerScore) {
        if (playerScore > computerScore) {
            console.log("Final Result: You win! Congratulations!")
        } else if (computerScore > playerScore) {
            console.log("Final Result: You lose! Better luck next time!")
        } else {
            console.log("Final Result: Tie!")
        }
    }
    