const resultsContainer = document.querySelector("#results-container");

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

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll("button");
    let result;

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
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

            if (result === "win") {
                humanScore++;
            } else if (result === "lose") {
                computerScore++;
            }
        });
    });

    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log("----------");
}

playGame();

