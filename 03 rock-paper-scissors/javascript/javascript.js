console.log("Test");  
const options = ["rock", "paper", "scissor"];

function getComputerChoice () {
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
            return `You Win! ${playerSelectionLowerCase} beats ${computerSelection}`
    }

    else if (
        (playerSelectionLowerCase == "rock" && computerSelection == "paper") ||
        (playerSelectionLowerCase == "paper" && computerSelection == "scissor") ||
        (playerSelectionLowerCase == "scissor" && computerSelection == "rock")
        ) {
        return `You Lose! ${playerSelectionLowerCase} loses to ${computerSelection}`
    }

    else if (playerSelectionLowerCase == computerSelection) {
        return `Draw! both uses ${playerSelectionLowerCase}`
    }

    else {
        return "invalid input"
    }
}
