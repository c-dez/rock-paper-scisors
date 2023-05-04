//crear 3 opciones, y elegir una de ellas al azar
let ppt=['piedra', 'papel', 'tijeras'];
let item;
item = choseOption();

//con funcion
function choseOption(){
return ( ppt[Math.floor(Math.random() * ppt.length)]);
}
