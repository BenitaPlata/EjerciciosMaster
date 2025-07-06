/*Ejercicio 40
Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos.*/

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      // Comprueba si el elemento actual del array es igual al texto
      return i; // devuelve la posición del array
    }
  }
  return -1; // si no encuentra el texto devuelve -1
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Leia")); // Debería devolver 1
console.log(findArrayIndex(mainCharacters, "Anakin")); // Debería devolver 5
console.log(findArrayIndex(mainCharacters, "Yoda")); // Debería devolver -1, porque no está

/*Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente. */

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text); // Paso 1: obtener índice
  if (index !== -1) {
    // Paso 2: si existe, eliminar
    array.splice(index, 1);
  }
  return array; // Paso 3: devolver array modificado
}

// Ejemplos para probar:
const characters = ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey"];

console.log(removeItem(characters, "Han Solo")); // Debería eliminar "Han Solo"
console.log(removeItem(characters, "Yoda")); // "Yoda" no está, array igual
console.log(removeItem(characters, "Leia")); // Elimina "Leia"
