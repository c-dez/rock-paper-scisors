// let playerSelection='paper';
// let computerSelection= getComSelection();

function getComSelection(){
    const ppt = ['rock', 'paper', 'scissors'];
    let randomNumb = Math.floor(Math.random()*3);
    return ppt[randomNumb];

}

function getPlayerSelection(){
    const ppt = ['rock', 'paper', 'scissors'];
    let randomNumb = Math.floor(Math.random()*3);
    return ppt[randomNumb];

}

function playRound(playerSelection, computerSelection){
    
    if((playerSelection == 'rock' && computerSelection =='scissors')||
    (playerSelection == 'paper' && computerSelection =='rock')||
    (playerSelection == 'scissors' && computerSelection =='paper')){
        return `you win ${playerSelection} beats ${computerSelection}`;
   
    }else if(playerSelection==computerSelection){
        return `its a tie ${playerSelection} and ${computerSelection}`;

    }else{
        return `you lose ${computerSelection} beats ${playerSelection}`
    }
}
// console.log(playRound(playerSelection, computerSelection));

function game(){
    for(i =0; i<5; i++){
        let playerSelection= getPlayerSelection();
        let computerSelection= getComSelection();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();





