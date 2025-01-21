
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(250,250);
ctx.lineTo(500, 0);
ctx.strokeStyle = "red";
ctx.stroke();