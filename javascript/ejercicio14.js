/*Ejercicio 14
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

Puedes usar este array para probar tu función:*/

const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];
function repeatCounter(list) {
  const contadorRep = {}; // Creo un objeto vacío para almacenar los resultados
  for (let i = 0; i < list.length; i++) {
    const palabra = list[i]; // accedo a cada palabra del array y lo guardo en mi variable palabra
    if (palabra in contadorRep) {
      contadorRep[palabra]++; // si la palabra ya existe en el objeto, incremento el valor del contador
    } else {
      contadorRep[palabra] = 1; // si la palabra no existe en el objeto, la añado
    }
  }
  return contadorRep;
}
// Llamo a la función con el array de palabras
const resultado = repeatCounter(words);
console.log(resultado);
