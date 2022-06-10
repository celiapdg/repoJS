const pushButton = document.getElementById("push");
const unshiftButton = document.getElementById("unshift");
const insertButton = document.getElementById("insert");
const popButton = document.getElementById("pop");
const shiftButton = document.getElementById("shift");
const removeButton = document.getElementById("remove");

const positionInsert = document.getElementById("positionInsert");

const positionRemove = document.getElementById("positionRemove");

let listaStr = document.getElementsByClassName("lista")[0];
let eliminadosStr = document.getElementsByClassName("eliminados")[0];



function actualizarListas() {
    console.log(lista);
    listaStr.innerHTML = lista;
    eliminadosStr.innerHTML = eliminados;
    positionInsert.setAttribute("max", lista.length.toString());
    positionRemove.setAttribute("max", lista.length.toString());
}

function pushToList() {
    if (lista.length < 6) {
        console.log("hey");
        lista.push(eliminados.shift());
    }
    actualizarListas();
}


function unshiftToList() {
    if (lista.length < 6) {
        console.log("hey");
        lista.unshift(eliminados.shift());
    }
    actualizarListas();

}


function insertToList() {
    if (lista.length < 6 && positionInsert.value > 0) {
        posicion = positionInsert.value - 1;
        let temp = lista.splice(posicion);
        temp.unshift(eliminados.shift());
        lista = lista.concat(temp);
    }
    actualizarListas();
}


function popFromList() {
    if (lista.length > 0) {
        eliminados.push(lista.pop());
    }
    actualizarListas();
}

function shiftFromList() {
    if (lista.length > 0) {
        eliminados.push(lista.shift());
    }
    actualizarListas();

}

function removeFromList() {
    if (lista.length > 0) {
        posicion = parseInt(positionRemove.value) - 1;
        eliminados.push(lista.splice(posicion, 1));
    }
    actualizarListas();
}


lista = ["🌸", "🎵", "🎮", "🎉", "🍕", "🍫"];
eliminados = [];

actualizarListas();

pushButton.addEventListener("click", pushToList)
unshiftButton.addEventListener("click", unshiftToList)
insertButton.addEventListener("click", insertToList)
popButton.addEventListener("click", popFromList)
shiftButton.addEventListener("click", shiftFromList)
removeButton.addEventListener("click", removeFromList)
