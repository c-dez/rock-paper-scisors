//create 3 variables for rock paper scisors
let ppt=['piedra', 'papel', 'tijeras'];
var pcChose;
pcChose = pcChose();
//player choses a variable
//save that variable in  let playerChose 
let playerChose;
// playerChose= prompt(ppt);

//hardcode testing
var playerTest = 'papel';
var pcTest = 'piedra';




//funcion  multiplica el length  *  numero al azar, despues lo redondea hacia abajo
//this function choses rock, paper or scisors for the PC ta random
//returns string
function pcChose(){
return ( ppt[Math.floor(Math.random() * ppt.length)]);
}
//player and pc have selected, now compare resuts
console.log(`${playerTest} + ${pcTest}`);
var resultTest = [playerTest, pcTest];

//resultados t true, F false, D draw
//papel, papel D  tijeras F,  piedra T
//tijeras  papel T, tijeras D piedra F
//piedra  papel F, tijeras T,  piedra D


//compare and return resuts
//compara playerChose y pcChose y asigna valor true o flase o draw
function checkResults(playerTest, pcTest){
    if(resultTest.toString()=== 'papel,piedra'){
        console.log('T');
        return true;
    }else if(resultTest.toString()=== 'papel,tijeras'){
        console.log('F');
        
    }
    
}
console.log(checkResults());

    




