/*Ejercicio 13
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

Puedes usar este array para probar tu función:*/

const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function nameFinder(nameList, nameToFind) {
  const index = nameList.indexOf(nameToFind); //buscamos si el nombre que quiero buscar está en la lista y me devuelve la posición que guardamos en mi variable index.

  if (index !== -1) {
    return { found: true, position: index }; //si el nombre  está en la lista devuelve true y su posición
  } else {
    return false; //si el nombre no está en la lista devuelve false
  }
}

const resultado = nameFinder(names, "Steve"); //llamamos a la función con el array y el nombre que queremos buscar y lo guardamos en resultado

console.log(resultado);
