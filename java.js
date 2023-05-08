
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
function compareResults(){
    let player = getPlayerSelection();
    let computer= getComSelection();
    if((player ==='rock' && computer === 'scissors') ||
    (player ==='paper' && computer === 'rock')||
    (player ==='scissors' && computer === 'paper')){
       return console.log(`win ${player} ${computer}`)
    }else if(player===computer){
       return console.log(`tie ${player} ${computer}`)

    }else{
       return console.log(`lose ${player} ${computer}`)
    }
}
// console.log(compareResults())
    compareResults()




