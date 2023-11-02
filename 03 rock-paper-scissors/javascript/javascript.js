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
        return `Draw! both uses ${playerSelectionLowerCase}`
    }

    else {
        return "invalid input"
    }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));


function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock Paper or Scissor?")
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        if (result == "You Win!") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
            playerScore += 1;
        }

        else if (result == "You Lose!") {
            console.log(`You Lose! ${playerSelection} loses to ${computerSelection}`)
            computerScore += 1;
        }

        else if (result == "invalid input") {
            return console.log("Invalid Input")
        }

        else {
            return console.log("Draw")
        }
    }

    if (playerScore > computerScore) {
        console.log(`YOU WIN with a score of ${playerScore} compared to Computers ${computerScore}`)
    }

    else if (playerScore < computerScore) {
        console.log(`YOU LOSE with a score of ${playerScore} compared to Computers ${computerScore}`)
    }

    else {
        console.log(`DRAW with both scores ${playerScore}`)
    }
}


game();