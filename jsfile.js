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

    const resetBtn = document.querySelector('#btn-reset');
    resetBtn.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
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
const containerTest = document.querySelector('div');
const resultTest = document.createElement('h3');
    function playRound(playerChoice,computerChoice) {
        if (playerChoice === "rock") {
            if (computerChoice === "paper") {
                computerScore += 1;
                resultTest.textContent = `You lose! Paper beats rock! Player Score: ${playerScore} Computer Score: ${computerScore}.`
                containerTest.appendChild(resultTest);
            } else if (computerChoice === "scissors") {
                playerScore += 1;
                resultTest.textContent = `You Win! Rock beats scissors! Player Score: ${playerScore} Computer Score: ${computerScore}.`
                containerTest.appendChild(resultTest);
            } else {
                resultTest.textContent = `Tie! Player Score: ${playerScore} Computer Score: ${computerScore}.`
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
        for (let i = 0; i < 5; i++) {
            if (playerScore === 5 || computerScore === 5) {
                finalResult(playerScore,computerScore);
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;

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
    