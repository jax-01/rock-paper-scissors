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

