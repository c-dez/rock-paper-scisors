let playerScore = 0;
let computerScore = 0;
let rounds = 0;

let playerSelection;

function getComSelection(){
    const ppt = ['Rock', 'Paper', 'Scissors'];
    let randomNumb = Math.floor(Math.random()*3);
    return ppt[randomNumb];

}
    //old player selection---random
// function getPlayerSelection(){
//     const ppt = ['rock', 'paper', 'scissors'];
//     let randomNumb = Math.floor(Math.random()*3);
//     return ppt[randomNumb];

// }



function playRound(playerSelection, computerSelection){
    
    if((playerSelection == 'Rock' && computerSelection =='Scissors')||
    (playerSelection == 'Paper' && computerSelection =='Rock')||
    (playerSelection == 'Scissors' && computerSelection =='Paper')){
        playerScore++;
        rounds++;
        return `you win ${playerSelection} beats ${computerSelection}`;
   
    }else if(playerSelection==computerSelection){
        return `its a tie ${playerSelection} and ${computerSelection}`;

    }else{
        computerScore++;
        rounds++;
        return `you lose ${playerSelection} lose to ${computerSelection}`
    }
}

// function game(){
//     for(i =0; i<5; i++){
//         let playerSelection= getPlayerSelection();
//         let computerSelection= getComSelection();
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     if (playerScore>computerScore){
//         console.log('You won')
//     }else if(playerScore<computerScore){
//         console.log('you lose!')

//     }else{
//         console.log('its a tie!')
//     }
// }
// game();

// ---------from here starts rock paper scissors UI---------------

// btnRock
    // const btnRock = document.querySelector('.btnRock');
    // btnRock.addEventListener('click',()=> playerSelection = btnRock.textContent);
    // btnRock.addEventListener('click',()=>computerSelection= getComSelection());
    // // btnRock.addEventListener('click',()=> console.log(playerSelection + computerSelection));
    // btnRock.addEventListener('click',()=>console.log(playRound(playerSelection, computerSelection)
    //  +' Player score: '+ playerScore));
    
//player score
const scorePlayer = document.querySelector('.playerScore');
// btnRock.addEventListener('click',()=>scorePlayer.textContent =
    // `Player Score: ${playerScore}`)

function fiveRounds(rounds){
    if(rounds>= 5 && playerScore>computerScore){
        alert('You win');
    }else if(rounds>=5 && computerScore>playerScore){
    alert('you lose')
    }
}
// btnRock.addEventListener('click',()=>fiveRounds(rounds));


const btnRocks = document.querySelectorAll('.btnRock');

btnRocks.forEach(function(btnRock) {
  btnRock.addEventListener('click', () => {
    playerSelection = btnRock.textContent;
    computerSelection = getComSelection();
    console.log(playRound(playerSelection, computerSelection) 
        + ' Player score: ' + playerScore);
    fiveRounds(rounds);
    scorePlayer.textContent =
    `Player Score: ${playerScore}`;

  });
});


