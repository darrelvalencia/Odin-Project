console.log("Test");  
const options = ["rock", "paper", "scissor"];

function getComputerChoice () {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    
    if (
        (playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper")
        ) {
            return `You Win! ${playerSelection} beats ${computerSelection}`
    }

    else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissor") ||
        (playerSelection == "scissor" && computerSelection == "rock")
        ) {
        return `You Lose! ${playerSelection} loses to ${computerSelection}`
    }

    else if (playerSelection == computerSelection) {
        return `Draw! both uses ${playerSelection}`
    }

    else {
        return "invalid input"
    }
}
