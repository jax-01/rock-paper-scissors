const resultsContainer = document.querySelector("#results-container");

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);

    const computerChoice = document.createElement("p");
    
    if (choice === 0) {
        computerChoice.textContent = "Computer: Rock";
        resultsContainer.appendChild(computerChoice);
        return "rock";
    } else if (choice === 1) {
        computerChoice.textContent = "Computer: Paper";
        resultsContainer.appendChild(computerChoice);
        return "paper";
    } else {
        computerChoice.textContent = "Computer: Scissors";
        resultsContainer.appendChild(computerChoice);
        return "scissors";
    }
}

const getHumanChoice = () => {
    let humanChoice;
    do {
        humanChoice = prompt("Select between: 'rock', 'paper' or 'scissors'");
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            console.log(`Player: ${humanChoice}`);
            return humanChoice;
        } else {
            continue;
        }
    } while (true);
}

const playRound = (humanChoice, computerChoice) => {
    const roundResult = document.createElement("p");

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            resultsContainer.appendChild(roundResult);
            return "win";
        } else if (computerChoice === "paper") {
            roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            resultsContainer.appendChild(roundResult);
            return "lose";
        } else {
            roundResult.textContent = "Draw!";
            resultsContainer.appendChild(roundResult);
            return "draw";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            resultsContainer.appendChild(roundResult);
            return "win";
        } else if (computerChoice === "scissors") {
            roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            resultsContainer.appendChild(roundResult);
            return "lose";
        } else {
            roundResult.textContent = "Draw!";
            resultsContainer.appendChild(roundResult);
            return "draw";
        }
    } else {
        if (computerChoice === "paper") {
            roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            resultsContainer.appendChild(roundResult);
            return "win";
        } else if (computerChoice === "rock") {
            roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            resultsContainer.appendChild(roundResult);
            return "lose";
        } else {
            roundResult.textContent = "Draw!";
            resultsContainer.appendChild(roundResult);
            return "draw";
        }
    }
}

const updateScore = (result) => {
    if (result === "win") {
        humanScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    const runningScore = document.createElement("p");
    runningScore.textContent = `Player Score: ${humanScore} | Computer Score: ${computerScore}`;
    resultsContainer.appendChild(runningScore);
}

const playGame = () => {

    const buttons = document.querySelectorAll("button");
    let result;

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (humanScore !== 5 || computerScore !== 5) {
                let userChoice = button.id;

                switch (userChoice) {
                    case "rock":
                        result = playRound("rock", getComputerChoice());
                        break;
                    case "paper":
                        result = playRound("paper", getComputerChoice());
                        break;
                    case "scissors":
                        result = playRound("scissors", getComputerChoice());
                        break;
                    default:
                        console.log("Invalid choice");
                }

                updateScore(result);

                if (humanScore === 5 || computerScore === 5) {
                    buttons.forEach((button) => {
                        button.disabled = true;
                    });
                    console.log("Game over!");
                }
            }
            
        });
    });
}

playGame();

