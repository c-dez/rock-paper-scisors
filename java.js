const ppt = ['piedra', 'papel', 'tijeras'];
let playerCho =  ppt[Math.floor(Math.random() *ppt.length)]
let pcCho =  ppt[Math.floor(Math.random() *ppt.length)]

function gameStart(){
    if((playerCho == 'papel' && playerCho == 'piedra')||
    (playerCho == 'piedra' && playerCho == 'tijeras')||
    (playerCho == 'tijeras' && playerCho == 'papel')){
        return 'win';

    }else if (playerCho === pcCho){
        return 'tie';
    }else{
        return 'lose';
    }
}
console.log(gameStart()+' ' + playerCho +' '+ pcCho);


