let playerName=prompt("Enter your name");
if(playerName=="" || playerName==null){
    playerName="Player";
}
document.querySelector('div.humanScore div.name').innerHTML=`<h3>${playerName}</h3>`;
let humanScore = 0;
let computerScore = 0;
let playCount=0;

const rock=document.querySelector('#rock');
rock.addEventListener('click',function(e){
    playRound("Rock");
});

const paper=document.querySelector('#paper');
paper.addEventListener('click',function(e){
    playRound("Paper");
});

const scissors=document.querySelector('#scissors');
scissors.addEventListener('click',function(e){
    playRound("Scissors");
});

const reset=document.querySelector('.reset');
reset.addEventListener('click',function(e){
    updateScore("Game restarted!",0,0,0,true);
});
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

function updateScore(message,computerScoreIncrement,humanScoreIncrement,playCountIncrement,isReset){
    document.querySelector(".round").innerHTML=`<h2>Round ${playCount+1}</h2>`
    document.querySelector(".winner").innerHTML=`<h1>${message}</h1>`;
    if(isReset){
        computerScore=computerScoreIncrement;
        humanScore=humanScoreIncrement;
        playCount=playCountIncrement;
        document.querySelector(".round").innerHTML=``;
    }
    else{
        computerScore+=computerScoreIncrement;
        humanScore+=humanScoreIncrement;
        playCount+=playCountIncrement;
    }
    if(playCount==5){
        if(humanScore==computerScore){
            document.querySelector(".winner").innerHTML=`<h1>The game is draw! Click reset to play again!</h1>`
        }
        else if(humanScore>computerScore){
            document.querySelector(".winner").innerHTML=`<h1>${playerName} Won the Game! Click reset to play again!</h1>`;
        }
        else{
            document.querySelector(".winner").innerHTML=`<h1>Computer Won the Game! Click reset to play again!</h1>`;
        }
    }
    document.querySelector("div.humanScore div.scoreCount").innerHTML=`<h3>${humanScore}</h3>`;
    document.querySelector("div.computerScore div.scoreCount").innerHTML=`<h3>${computerScore}</h3>`;
}

// function getPlayerSelection(){
//     let choice = prompt("Enter your choice");
//     return choice;
// }

function playRound(playerSelection) {
    if(playCount==5){
        return;
    }
    let computerSelection=getComputerChoice();
    if(playerSelection.toLowerCase()===computerSelection.toLowerCase()){
        updateScore("It's a Draw!",0,0,1,false);
    }
    else if(playerSelection.toLowerCase()==="rock"){
        if(computerSelection.toLowerCase()==="paper"){
            updateScore("You Lose! Paper beats Rock",1,0,1,false);
        }
        else{
            updateScore("You Win! Rock beats Scissors",0,1,1,false);
        }
    }
    else if(playerSelection.toLowerCase()==="paper"){
        if(computerSelection.toLowerCase()==="rock"){
            updateScore("You Win! Paper beats Rock",0,1,1,false);
        }
        else{
            updateScore("You Lose! Scissors beats Paper",1,0,1,false);
        }
    }
    else if(playerSelection.toLowerCase()==="scissors"){
        if(computerSelection.toLowerCase()==="paper"){
            updateScore("You Win! Scissors beats Paper",0,1,1,false);
        }
        else{
            updateScore("You Lose! Rock beats Scissors",1,0,1,false);
        }
    }
}

// function game(){
    
//     console.log("Game starts!")
//         let playerSelection = getPlayerSelection();
//         if(playerSelection.toLowerCase()!=="rock" && playerSelection.toLowerCase()!=="paper" && playerSelection.toLowerCase()!=="scissors"){
//             console.log(`User entered ${playerSelection} as input which is not correct. Skipping this round.`)
//         }
//         let computerSelection = getComputerChoice();
//         console.log(`Your choice : ${playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase()}`);
//         console.log(`Computer's choice : ${computerSelection}`);
//         let result = playRound(playerSelection, computerSelection)
//         if(result==0){
//             computerScore++;
//         }
//         else if(result==1){
//             humanScore++;
//         }
//         console.log(`Your Score : ${humanScore}\nComputer Score : ${computerScore}`);
//     if(humanScore==computerScore){
//         console.log("The game ended as draw");
//     }
//     else if(humanScore>computerScore){
//         console.log("You won the game!");
//     }
//     else{
//         console.log("Computer won the game!");
//     }
// }

// game();