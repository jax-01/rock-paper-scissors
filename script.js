let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0) {
        document.getElementById("computer-choice").innerHTML = "Computer: Rock";
        return "rock";
    } else if (choice === 1) { 
        document.getElementById("computer-choice").innerHTML = "Computer: Paper";
        return "paper";
    } else {
        document.getElementById("computer-choice").innerHTML = "Computer: Scissors";
        return "scissors";
    }
}

const getHumanChoice = () => {
    do {
        let humanChoice = prompt("Select between: 'rock', 'paper' or 'scissors'");
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            document.getElementById("human-choice").innerHTML = `Player: ${humanChoice}`;
            return humanChoice;
        } else {
            continue;
        }
    } while (true);
}

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if (computerChoice === "paper") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else {
            console.log("Draw!");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if (computerChoice === "scissors") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else {
            console.log("Draw!");
        }
    } else {
        if (computerChoice === "paper") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if (computerChoice === "rock") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else {
            console.log("Draw!");
        }
    }
}