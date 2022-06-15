document.write("<p>🎌Que comience el juego🎌</p>")
document.write('<button id="piedra">🥌</button><button id="papel">🧻</button><button id="tijera">✂</button>');

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");

let puntosJugador = 0;
let puntosMaster = 0;

function master() {
    opciones = ["🥌", "🧻", "✂"];
    console.log(Math.random() * 3);
    return opciones[Math.floor(Math.random() * opciones.length)];
}

function ejegirPiedra() {
    let ronda = document.createElement("p");
    let puntuaciones = document.createElement("p");
    opcionMaster = master();
    ronda.innerHTML = "Jugador: 🥌\nMaster: " + opcionMaster;
    document.body.appendChild(ronda);
    switch (opcionMaster) {
        case "🥌":
            puntuaciones.innerHTML = "Jugador: " + puntosJugador + " Master: " + puntosMaster;
            break;
        case "🧻":
            puntosMaster++;
            puntuaciones.innerHTML = "Jugador: " + puntosJugador + " Master: " + puntosMaster;
            break;
        case "✂":
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
    ronda.innerHTML = "Jugador: 🧻\nMaster: " + opcionMaster;
    document.body.appendChild(ronda);
    switch (opcionMaster) {
        case "🥌":
            puntosJugador++;
            puntuaciones.innerHTML = "Jugador: " + puntosJugador + " Master: " + puntosMaster;
            break;
        case "🧻":
            puntuaciones.innerHTML = "Jugador: " + puntosJugador + " Master: " + puntosMaster;
            break;
        case "✂":
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
    ronda.innerHTML = "Jugador: ✂\nMaster: " + opcionMaster;
    document.body.appendChild(ronda);
    switch (opcionMaster) {
        case "🥌":
            puntosMaster++;
            puntuaciones.innerHTML = "Jugador: " + puntosJugador + " Master: " + puntosMaster;
            break;
        case "🧻":
            puntosJugador++;
            puntuaciones.innerHTML = "Jugador: " + puntosJugador + " Master: " + puntosMaster;
            break;
        case "✂":
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
        document.write("<h1> has perdío pringao </h1>");
    } else { };
}

piedra.addEventListener("click", ejegirPiedra);
papel.addEventListener("click", ejegirPapel);
tijera.addEventListener("click", ejegirTijera);