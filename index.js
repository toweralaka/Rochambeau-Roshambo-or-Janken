const choiceButtons = document.querySelectorAll(".option_btn");
const humanChoice = document.querySelector(".human_choice");
const computerChoice = document.querySelector(".computer_choice");
const results = document.querySelector(".results");
const humanScoreText = document.querySelector(".human_score");
const computerScoreText = document.querySelector(".computer_score");
const finalScore = document.querySelector(".final_score");
const ROUNDS = 5
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

choiceButtons.forEach(choice => {
    choice.addEventListener("click", (e)=>{
        let humanSelection = e.target.textContent.toLowerCase();
        let computerSelection = getComputerChoice();
        humanChoice.textContent = humanSelection;
        computerChoice.textContent = computerSelection;
        playRound(humanSelection, computerSelection);
        }
    )
})

const playRound = (humanChoice, computerChoice) => {
    if(humanChoice=="rock" && computerChoice =="scissors"){
        humanScore++;
        results.textContent = "You win!";
    }
    else if(humanChoice=="scissors" && computerChoice =="rock"){
        computerScore++;
        results.textContent = "You lose! Rock beats Scissors.";

    }
    else if(humanChoice=="scissors" && computerChoice =="paper"){
        humanScore++;
        results.textContent = "You win!";
    }
    else if(humanChoice=="paper" && computerChoice =="scissors"){
        computerScore++;
        results.textContent = "You lose! Scissors beats Paper.";
    }
    else if(humanChoice=="paper" && computerChoice =="rock"){
        humanScore++;
        results.textContent = "You win!";
    }
    else if(humanChoice=="rock" && computerChoice =="paper"){
        computerScore++;
        results.textContent = "You lose! Paper beats Rock.";
    }
    else {
        results.textContent = "You draw";
    }
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
    showFinalScore()
}

const getWinner = () => {
    if(humanScore > computerScore) {
        finalScore.textContent = "You got more points. You win!";
    }
    else if(humanScore < computerScore) {
        finalScore.textContent = "You got fewer points. Computer wins!";
    }
    else {
        finalScore.textContent = "You draw!";
    }
}

const showFinalScore = () => {
    if(humanScore == ROUNDS || computerScore == ROUNDS) {
        getWinner();
        humanScore = 0;
        computerScore = 0;
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
}

// playGame();
