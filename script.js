const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0) {
        console.log("Computer: rock");
        return "rock";
    } else if (choice === 1) {
        console.log("Computer: paper");
        return "paper";
    } else {
        console.log("Computer: scissors");
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
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return "win";
        } else if (computerChoice === "paper") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return "lose";
        } else {
            console.log("Draw!");
            return "draw";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return "win";
        } else if (computerChoice === "scissors") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return "lose";
        } else {
            console.log("Draw!");
            return "draw";
        }
    } else {
        if (computerChoice === "paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return "win";
        } else if (computerChoice === "rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return "lose";
        } else {
            console.log("Draw!");
            return "draw";
        }
    }
}

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const human = getHumanChoice();
    const computer = getComputerChoice();
    
    let result = playRound(human, computer);
    if (result === "win") {
        humanScore++;
    } else if (result === "lose"){
        computerScore++;
    }

    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log("----------");
}

playGame();

