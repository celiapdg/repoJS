let a = 13;
console.log(a);
console.log(typeof a);

const SALUDO = "Hola";

// FUNCIÓN ANÓNIMA
const saludar = function (saludo) {
    let nombre = "Celia";
    console.log(saludo + ", " + nombre)
}

// FUNCIÓN CON NOMBRE
function saludar2(saludo) {
    let nombre = "Celia";
    console.log(saludo + ", " + nombre)
}

saludar(SALUDO);
saludar2(SALUDO);