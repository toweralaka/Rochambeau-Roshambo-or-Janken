let humanScore = 0;
let computerScore = 0;

const getComputerChoice = ()=>{
    const choiceArray = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choiceArray.length)
    return choiceArray[randomIndex]
}

const getHumanChoice = () => {
    let choice = prompt("Rock, Paper, or Scissors")
    return choice.toLowerCase()
}

const playRound = (humanChoice, computerChoice) => {
    if(humanChoice=="rock" && computerChoice =="scissors"){
        humanScore++;
        console.log("You win!")
    }
    else if(humanChoice=="scissors" && computerChoice =="rock"){
        computerScore++;
        console.log("You lose! Rock beats Scissors.")

    }
    else if(humanChoice=="scissors" && computerChoice =="paper"){
        humanScore++;
        console.log("You win!")
    }
    else if(humanChoice=="paper" && computerChoice =="scissors"){
        computerScore++;
        console.log("You lose! Scissors beats Paper.")
    }
    else if(humanChoice=="paper" && computerChoice =="rock"){
        humanScore++;
        console.log("You win!")
    }
    else if(humanChoice=="rock" && computerChoice =="paper"){
        computerScore++;
        console.log("You lose! Paper beats Rock.")
    }
    else {
        console.log("You draw")
    }
}


const playGame = () => {
    let totalRounds = 5;
    for(let i=0; i<totalRounds; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.info(humanSelection, computerSelection);
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore) {
        console.log("You got more points. You win!")
    }
    else if(humanScore < computerScore) {
        console.log("You got fewer points. Computer wins!")
    }
    else {
        console.log("You draw!")
    }
}

playGame();
