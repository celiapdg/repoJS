const on = document.getElementById("on");
const off = document.getElementById("off");
const bon = document.getElementById("bon");
const boff = document.getElementById("boff");

function encender() {
    off.hidden = true;
    on.hidden = false;



}

function apagar() {
    on.hidden = true;
    off.hidden = false;
}

boff.addEventListener("click", encender);
bon.addEventListener("click", apagar);