//Checks which button is clicked and plays a round with that selection.
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playOneRound('rock'));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playOneRound('paper'));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playOneRound('scissors'))


//Calculates a random number between min and max (both inclusive)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Makes computer pick between rock, paper, or scissors
function computerChoice() {
    let randomNumber = getRndInteger(0, 2);
    if (randomNumber === 0) { //Associates certain numbers with a value of either 'rock', 'paper', or 'scissors'
        return 'rock'
    } else if (randomNumber === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

//Checks if player input is valid
function isValidInput(input) { //check if valid input
    if (input === 'rock' || input === 'paper' || input === 'scissors') {
        return true;
    } else { 
        return false 
    }
}

//Compare scores
function compareScores(playerChoice, computerChoice) { 
    if (playerChoice === computerChoice) { //if both have same outcome, go back to beginning
        itsATie(playerChoice);
    } else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') { //if player picks rock and computer picks scissors, player wins
            playerWins(playerChoice, computerChoice);
        } else {
            computerWins(playerChoice, computerChoice); //if player picks rock and computer picks paper, computer wins
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') { //if player picks scissors and computer picks paper, player wins
            playerWins(playerChoice, computerChoice); 
        } else { 
            computerWins(playerChoice, computerChoice); //if player picks scissors and computer picks rock, computer wins
        }
    } else {
        if (computerChoice === 'rock') { //if player picks paper and computer picks rock, player wins
            playerWins(playerChoice, computerChoice);
        } else {      
            computerWins(playerChoice, computerChoice); //if player picks paper and computer picks scissors, computer wins
        }
    }
}

//Variables used to display results
const textOutput = document.querySelector('#winnerText');
const result = document.querySelector('#result');

//Variables used to display score
let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.querySelector('#playerScore p');
const computerScoreDisplay = document.querySelector('#computerScore p');
let gameWon = false;

//What happens when the player wins
function playerWins(playerChoice, computerChoice) {
    playerScore += 1;
    playerScoreDisplay.textContent = playerScore.toString();
    if (playerScore >= 5 && !gameWon) {
        textOutput.textContent = `The player has won the game!`;
        gameWon = true;
    } else if (!gameWon) {
        textOutput.textContent = `The player chose ${playerChoice} and the computer chose ${computerChoice}. The player wins!`;
    }
    
}

//What happens when the computer wins
function computerWins(playerChoice, computerChoice) {
    computerScore += 1;
    computerScoreDisplay.textContent = computerScore.toString();
    if (computerScore >= 5 && !gameWon) {
        textOutput.textContent = `The computer has won the game!`;
        gameWon = true;
    } else if (!gameWon) {
        textOutput.textContent = `The player chose ${playerChoice} and the computer chose ${computerChoice}. The computer wins!`;
    }
}

//What happens when it's a tie  
function itsATie(playerChoice) {
    if (!gameWon) {
    textOutput.textContent = `Both the player and computer chose ${playerChoice}, it's a tie!`;
    }
}

//Plays one round of rock, paper, scissors
function playOneRound(playerChoice) {
    //Gathering user input
    playerchoice = playerChoice.toLowerCase(); //make it case insensitive
    if (!isValidInput(playerChoice)) { //checks if it's a valid input
        alert(`That's not a valid value. Try again`);
        playOneRound();
    }
    
    
    //Gathering computer input
    let computerSelection = computerChoice();

    //Comparing scores. Winner announcement is called from within this function, should change.
    compareScores(playerChoice, computerSelection);
}