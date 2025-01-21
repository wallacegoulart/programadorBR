
let image = document.getElementById("like");

image.addEventListener("click", function() {

    let lastImage = image.getAttribute("src");
    image.setAttribute("src","./imagens/Captura de tela 2023-09-26 104504.png");
    console.log(lastImage);
})