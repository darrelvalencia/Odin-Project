console.log("Test");
const options = ["rock", "paper", "scissor"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    const playerSelectionLowerCase = playerSelection.toLowerCase();

    if (
        (playerSelectionLowerCase == "rock" && computerSelection == "scissor") ||
        (playerSelectionLowerCase == "paper" && computerSelection == "rock") ||
        (playerSelectionLowerCase == "scissor" && computerSelection == "paper")
    ) {
        // return `You Win! ${playerSelectionLowerCase} beats ${computerSelection}`
        return "You Win!"
    }

    else if (
        (playerSelectionLowerCase == "rock" && computerSelection == "paper") ||
        (playerSelectionLowerCase == "paper" && computerSelection == "scissor") ||
        (playerSelectionLowerCase == "scissor" && computerSelection == "rock")
    ) {
        // return `You Lose! ${playerSelectionLowerCase} loses to ${computerSelection}`
        return "You Lose!"
    }

    else if (playerSelectionLowerCase == computerSelection) {
        // return `Draw! both uses ${playerSelectionLowerCase}`
        return "Draw!"
    }

    else {
        return "invalid input"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock Paper or Scissor?")
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        if (result == "You Win!") {
            console.log(`You Win! Your ${playerSelection.toLowerCase()} beats ${computerSelection}`)
            playerScore += 1;
        }

        else if (result == "You Lose!") {
            console.log(`You Lose! Your ${playerSelection.toLowerCase()} loses to ${computerSelection}`)
            computerScore += 1;
        }

        else if (result == "invalid input") {
            console.log("Invalid Input")
        }

        else {
            console.log(`Draw! both uses ${computerSelection}`)
        }
    }

    if (playerScore > computerScore) {
        console.log(`YOU WIN with a score of ${playerScore} compared to Computer ${computerScore}`)
    }

    else if (playerScore < computerScore) {
        console.log(`YOU LOSE with a score of ${playerScore} compared to Computer ${computerScore}`)
    }

    else {
        console.log(`DRAW with both scores ${playerScore}`)
    }
}


game();