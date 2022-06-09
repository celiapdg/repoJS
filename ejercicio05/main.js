function lanzarMoneda() {
    let resultado = Math.round(Math.random());
    return resultado;
}

let moneda = ['cara', 'cruz'];

console.log(moneda[lanzarMoneda()]);