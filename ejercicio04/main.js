saludar = (nombre, apellidos) => {
    return nombre + " " + apellidos;
}

console.log(saludar("Celia", "Lumbreras Herrera"));

function imprimir(booleano) {
    console.log(booleano);
}

imprimir(true);

function imprimirInfinito(...valores) {
    valores.forEach(valor => {
        console.log(valor);
    })
}

imprimirInfinito(1, 2, 3, 4, 5);