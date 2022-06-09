//1
let comida = ["🍔", "🌮", "🍣", "🍕", "🍜", "🍛", "🍙", "🍘", "🥩"];
let posicionPizza = comida.indexOf("🍕");

for (let i = posicionPizza; i < comida.length; i++) {
    comida[i] = "🍺";
}

console.log(comida);

//2
let comida2 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
console.log(comida2.includes("🍍"));

//3
let comida3 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
console.log(comida3.splice(comida3.indexOf("🍍"), 1));
console.log(comida3);

//4
let frutas = ["🍓", "🍋", "🍓", "🍋", "🍓"];
console.log(frutas.fill("🍓"));

//5
let picante = ["🌶", "🥛", "🌶", "🥛", "🌶", "🥛"];
picante = picante.join().replaceAll("🌶", "🌶,🥵").split(",");
console.log(picante);

//6
let cartas = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];
cartas = cartas.join().replaceAll("🎴,🎴", "🎴,🃏,🎴").replaceAll("🎴,🎴", "🎴,🃏,🎴").split(",");
console.log(cartas);