const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};
const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if (numeroAdivinado == numeroSecreto) {//usando el === (estrictamente igual que) el juego no funciona, no me toma el numero correcto por ejemplo me dice 94 es mayor y 93 es menor. Porbe con decimales pero tampoco
    console.log("¡Felicitaciones! ¡Adivinaste el número secreto!");
  } else if (numeroAdivinado > numeroSecreto) {
    console.log("El número secreto es menor. ¡Sigue intentando!");
  } else {
    console.log("El número secreto es mayor. ¡Sigue intentando!");
  }
};
module.exports = {
  generarNumeroAleatorio,
  verificarAdivinanza,
};
