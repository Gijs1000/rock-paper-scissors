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

//What happens when the player wins
function playerWins(playerChoice, computerChoice) {
    alert(`The player chose ${playerChoice} and the computer chose ${computerChoice}. The player wins!`)
}

//What happens when the player loses
function computerWins(playerChoice, computerChoice) {
    alert(`The player chose ${playerChoice} and the computer chose ${computerChoice}. The computer wins!`)
}

//What happens when it's a tie
function itsATie(playerChoice) {
    alert(`Both the player and computer chose ${playerChoice}, it's a tie!`)
}

//Plays one round of rock, paper, scissors
function playOneRound() {
    //Gathering user input
    let playerChoice = prompt("What is your choice?"); //gather user input
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


//Plays five rounds in a row.
function game() {
    for(i = 0; i < 5; i++) {
        playOneRound();
    }
}