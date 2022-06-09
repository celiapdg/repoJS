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

for (let index = 0; index < 2000; index += 400) {
    console.log(index);

}

