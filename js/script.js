function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if(choice===0){
        return "Rock";
    }
    else if(choice==1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function getPlayerSelection(){
    let choice = prompt("Enter your choice");
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase()===computerSelection.toLowerCase()){
        console.log("It's a Draw!");
        return 2;
    }
    else if(playerSelection.toLowerCase()==="rock"){
        if(computerSelection.toLowerCase()==="paper"){
            console.log("You Lose! Paper beats Rock");
            return 0;
        }
        else{
            console.log("You Win! Rock beats Scissors");
            return 1;
        }
    }
    else if(playerSelection.toLowerCase()==="paper"){
        if(computerSelection.toLowerCase()==="rock"){
            console.log("You Win! Paper beats Rock");
            return 1;
        }
        else{
            console.log("You Lose! Scissors beats Paper");
            return 0;
        }
    }
    else if(playerSelection.toLowerCase()==="scissors"){
        if(computerSelection.toLowerCase()==="paper"){
            console.log("You Win! Scissors beats Paper");
            return 1;
        }
        else{
            console.log("You Lose! Rock beats Scissors");
            return 0;
        }
    }
}

function game(){
    let humanScore = 0;
    let computerScore = 0;
    console.log("Game starts!")
    for (let i = 1; i <=5 ; i++) {
        console.log(`Round ${i}`);
        let playerSelection = getPlayerSelection();
        if(playerSelection.toLowerCase()!=="rock" && playerSelection.toLowerCase()!=="paper" && playerSelection.toLowerCase()!=="scissors"){
            console.log(`User entered ${playerSelection} as input which is not correct. Skipping this round.`)
            continue;
        }
        let computerSelection = getComputerChoice();
        console.log(`Your choice : ${playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase()}`);
        console.log(`Computer's choice : ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection)
        if(result==0){
            computerScore++;
        }
        else if(result==1){
            humanScore++;
        }
        console.log(`Your Score : ${humanScore}\nComputer Score : ${computerScore}`);
    }
    if(humanScore==computerScore){
        console.log("The game ended as draw");
    }
    else if(humanScore>computerScore){
        console.log("You won the game!");
    }
    else{
        console.log("Computer won the game!");
    }
}

game();