// const eat1 = document.getElementById("eat1");
// const eat2 = document.getElementById("eat2");
// const eat3 = document.getElementById("eat3");
// const play1 = document.getElementById("play1");
// const play2 = document.getElementById("play2");
// const play3 = document.getElementById("play3");
// const fight = document.getElementById("fight");
// const flee = document.getElementById("flee");
// const sleep1 = document.getElementById("sleep1");
// const sleep2 = document.getElementById("sleep2");

let tamanyo = 40;
let hambre = 80;
let juego = 80;
let fuerza = 80;
let descanso = 80;
let felicidad = 40; // idealmente sería una media de hambre, juego, fuerza y descanso, pero ya lo dejo así

function cambiarHambre(valor) {
    hambre += valor;
    if (hambre > 100) {
        hambre = 100;
        cambiarTamanyo(5);
    }
    if (hambre < 0) {
        hambre = 0;
        cambiarTamanyo(-10);
    }
    $(".eat .full").css("width", `${hambre}%`);
}

function cambiarTamanyo(valor) {
    tamanyo += valor;
    if (tamanyo > 70) tamanyo = 70;
    if (tamanyo <= 0) {
        tamanyo = 30;
        $("img").attr('src', "pet.gif");
    }
    $("img").css("width", `${tamanyo}%`);
}

function cambiarJuego(valor) {
    juego += valor;
    if (juego > 100) juego = 100;
    if (juego < 0) juego = 0;
    $(".play .full").css("width", `${juego}%`);
}

function cambiarFuerza(valor) {
    fuerza += valor;
    if (fuerza > 100) fuerza = 100;
    if (fuerza < 0) fuerza = 0;
    $(".fight .full").css("width", `${fuerza}%`);
}

function cambiarDescanso(valor) {
    descanso += valor;
    if (descanso > 100) descanso = 100;
    if (descanso < 0) descanso = 0;
    $(".sleep .full").css("width", `${descanso}%`);
}

function cambiarFelicidad(valor) {
    felicidad += valor;
    if (felicidad > 100) felicidad = 100;
    if (felicidad < 0) felicidad = 0;
    $(".img .full").css("width", `${felicidad}%`);
}

function feed1() {
    cambiarHambre(30);
    cambiarFuerza(-10);
    cambiarDescanso(-5);
    cambiarFelicidad(-10);
}

function feed2() {
    cambiarHambre(10);
    cambiarFelicidad(5);
}

function feed3() {
    cambiarHambre(20);
    cambiarFuerza(-5);
    cambiarFelicidad(-5);
    cambiarDescanso(-3);
}

function play1() {
    cambiarHambre(-5);
    cambiarJuego(20);
    cambiarFuerza(-5);
    cambiarDescanso(-10);
    cambiarFelicidad(10);
}

function play2() {
    cambiarHambre(-20);
    cambiarJuego(30);
    cambiarFuerza(10);
    cambiarDescanso(-30);
    cambiarFelicidad(15);
}

function play3() {
    cambiarHambre(-5);
    cambiarJuego(15);
    cambiarFuerza(5);
    cambiarDescanso(-15);
    cambiarFelicidad(5);
}

function fight() {
    cambiarHambre(-10);
    cambiarFuerza(25);
    cambiarDescanso(-20);
    cambiarFelicidad(-30);
}

function flee() {
    cambiarHambre(-5);
    cambiarFuerza(-5);
    cambiarFelicidad(10);
}

function sleep1() {
    cambiarHambre(-20);
    cambiarJuego(-15);
    cambiarDescanso(40);
    cambiarFelicidad(20);
}

function sleep2() {
    cambiarHambre(-5);
    cambiarDescanso(10);
    cambiarFelicidad(5);
}

$("#feed1").click(() => {
    feed1()
});

$("#feed2").click(() => {
    feed2()
});

$("#feed3").click(() => {
    feed3()
});

$("#play1").click(() => {
    play1()
});

$("#play2").click(() => {
    play2()
});

$("#play3").click(() => {
    play3()
});

$("#fight").click(() => {
    fight()
});

$("#flee").click(() => {
    flee()
});

$("#sleep1").click(() => {
    sleep1()
});

$("#sleep2").click(() => {
    sleep2()
});