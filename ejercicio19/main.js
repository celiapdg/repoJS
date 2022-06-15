const back = document.getElementById("back");
const front = document.getElementById("front");

function mostrar() {
    front.style.opacity = "100%";
}

function ocultar() {
    front.style.opacity = "0%";
}

back.addEventListener("mouseover", mostrar);
back.addEventListener("mouseout", ocultar);