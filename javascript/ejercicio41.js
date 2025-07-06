/*Ejercicio 41
Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()*/

function rollDice(numFaces) {
  return Math.floor(Math.random() * numFaces) + 1; //genero  numero aleatorio
}

console.log(rollDice(6)); // simula un dado de 6 caras, resultado entre 1 y 6
console.log(rollDice(20)); // dado de 20 caras, resultado entre 1 y 20
