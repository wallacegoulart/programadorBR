
let jogador = document.getElementById("jogador");

jogador.style.top="100px";
jogador.style.left="90px";

var xInicial = 0; 
var yInicial = 0;

function moverJogadorPara(x,y){

    let posX = x + "px";
    let posY = y + "px";

    jogador.style.top = posX;
    jogador.style.left = posY;
}


setInterval(function(){

    moverJogadorPara(xInicial++, yInicial++);

}, 16);