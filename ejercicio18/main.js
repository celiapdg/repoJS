document.write("<p>๐Que comience el juego๐</p>")
document.write('<button id="piedra">๐ฅ</button><button id="papel">๐งป</button><button id="tijera">โ</button>');

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");

let puntosJugador = 0;
let puntosMaster = 0;

function master() {
    opciones = ["๐ฅ", "๐งป", "โ"];
    console.log(Math.random() * 3);
    return opciones[Math.floor(Math.random() * opciones.length)];
}

function ejegirPiedra() {
    let ronda = document.createElement("p");
    let puntuaciones = document.createElement("p");
    opcionMaster = master();
    ronda.innerHTML = "Jugador: ๐ฅ\nMaster: " + opcionMaster;
    document.body.appendChild(ronda);
    switch (opcionMaster) {
        case "๐ฅ":
            puntuaciones.innerHTML = "Jugador: " + puntosJugador + " Master: " + puntosMaster;
            break;
        case "๐งป":
            puntosMaster++;
            puntuaciones.innerHTML = "Jugador: " + puntosJugador + " Master: " + puntosMaster;
            break;
        case "โ":
            puntosJugador++;
            puntuaciones.innerHTML = "Jugador: " + puntosJugador + " Master: " + puntosMaster;
            break;
    }
    document.body.appendChild(puntuaciones);
    comprobarGanador();
}

function ejegirPapel() {
    let ronda = document.createElement("p");
    let puntuaciones = document.createElement("p");
    opcionMaster = master();
    ronda.innerHTML = "Jugador: ๐งป\nMaster: " + opcionMaster;
    document.body.appendChild(ronda);
    switch (opcionMaster) {
        case "๐ฅ":
            puntosJugador++;
            puntuaciones.innerHTML = "Jugador: " + puntosJugador + " Master: " + puntosMaster;
            break;
        case "๐งป":
            puntuaciones.innerHTML = "Jugador: " + puntosJugador + " Master: " + puntosMaster;
            break;
        case "โ":
            puntosMaster++;
            puntuaciones.innerHTML = "Jugador: " + puntosJugador + " Master: " + puntosMaster;
            break;
    }
    document.body.appendChild(puntuaciones);
    comprobarGanador();
}

function ejegirTijera() {
    let ronda = document.createElement("p");
    let puntuaciones = document.createElement("p");
    opcionMaster = master();
    ronda.innerHTML = "Jugador: โ\nMaster: " + opcionMaster;
    document.body.appendChild(ronda);
    switch (opcionMaster) {
        case "๐ฅ":
            puntosMaster++;
            puntuaciones.innerHTML = "Jugador: " + puntosJugador + " Master: " + puntosMaster;
            break;
        case "๐งป":
            puntosJugador++;
            puntuaciones.innerHTML = "Jugador: " + puntosJugador + " Master: " + puntosMaster;
            break;
        case "โ":
            puntuaciones.innerHTML = "Jugador: " + puntosJugador + " Master: " + puntosMaster;
            break;
    }
    document.body.appendChild(puntuaciones);
    comprobarGanador();
}

function comprobarGanador() {
    if (puntosJugador === 3) {
        document.write("<h1> HAS GANADOOOOOOOOOOOOOOOOOOOOOOOOOO </h1>");
    } else if (puntosMaster === 3) {
        document.write("<h1> has perdรญo pringao </h1>");
    } else { };
}

piedra.addEventListener("click", ejegirPiedra);
papel.addEventListener("click", ejegirPapel);
tijera.addEventListener("click", ejegirTijera);