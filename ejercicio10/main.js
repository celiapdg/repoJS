function cambiaAO(cadena) {
    return cadena.replaceAll("a", "o").replaceAll("A", "O");
}

console.log(cambiaAO("CACAcaca"));

function acaEmpieza(cadena) {
    return cadena.toLowerCase().startsWith("aca");  // case insensitive
}

console.log(acaEmpieza("aCAdemia"));
console.log(acaEmpieza("academia"));
console.log(acaEmpieza("escuela"));

function dimeHola(hola) {
    if (hola.toLowerCase() === "hola") {             // case insensitive
        for (let i = 0; i < 3; i++) {
            console.log("HOLA CARACOLA");
        }

    } else {
        console.log("pues lloro");
    }
}

dimeHola("hola");
dimeHola("no quiero");