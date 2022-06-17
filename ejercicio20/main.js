const on = document.getElementById("on");
const off = document.getElementById("off");
const bon = document.getElementById("bon");
const boff = document.getElementById("boff");
const divon = document.getElementById("div-on");
const divoff = document.getElementById("div-off");

function encender() {
    // ocultamos y llevamos al fondo
    off.style.opacity = "0";
    boff.style.opacity = "0";
    divoff.style.zIndex = "-1";
    // mostramos y llevamos al frente
    on.style.opacity = "1";
    bon.style.opacity = "1";
    divon.style.zIndex = "1";



}

function apagar() {
    // ocultamos y llevamos al fondo
    on.style.opacity = "0";
    bon.style.opacity = "0";
    divon.style.zIndex = "-1";
    // mostramos y llevamos al frente
    off.style.opacity = "1";
    boff.style.opacity = "1";
    divoff.style.zIndex = "1";
}

boff.addEventListener("click", encender);
bon.addEventListener("click", apagar);