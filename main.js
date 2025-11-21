function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    return (randomNumber === 0 ? "rock" : 
                randomNumber === 1 ? "paper" : "scissors");
}

function getHumanChoice(){
    return prompt('Enter your choice:').toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return `Draw`;
    } else{
        switch(humanChoice){
            case "rock": 
                return computerChoice === "scissors"? "You win!" : "You lose!"
            case "paper": 
                return computerChoice === "rock"? "You win!" : "You lose!"
            case "scissors": 
                return computerChoice === "paper"? "You win!" : "You lose!"
            default:
                return "Invalid input!"
        }
    }
}

function playGame(round){
    let computerScore = 0;
    let humanScore = 0;
    let result = ""

    for(let i = 1; i <= round; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        result = playRound(humanSelection, computerSelection);

        if(result === "You win!"){
            humanScore++;
        } else if(result === "You lose!"){
            computerScore++;
        } else{
            humanScore += 0;
            computerScore += 0;
        }
        console.log(`Round ${i}: You: ${humanSelection} - Computer: ${computerSelection} . ${result}`);
    }

    if(humanScore === computerScore){
        console.log(`Final results: You: ${humanScore} - Computer: ${computerScore} . Draw!`)
    } else if(humanScore > computerScore){
        console.log(`Final results: You: ${humanScore} - Computer: ${computerScore} . You win!`)
    } else{
        console.log(`Final results: You: ${humanScore} - Computer: ${computerScore} . You lose!`)
    }
}

playGame(3);


