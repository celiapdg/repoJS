const texto = document.getElementById("texto");

function textoRojo() {
    $("#texto").css("color", "red");
}

function textoAzul() {
    texto.style.color = "blue";
}

$("#rojo").click(() => {
    textoRojo()
});

const boton2 = document.getElementById("azul");

boton2.addEventListener("click", textoAzul);