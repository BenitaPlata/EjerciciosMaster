/*Ejercicio 3
3.1 Dado el siguiente array, devuelve un array con sus nombres
utilizando .map().*/
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const nombres = users.map((usuario) => usuario.map);
console.log(nombres);

/*3.2 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
empiece por 'A'.*/
const users1 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const lista = users1.map((usuario) => {
  //usuario es cada objeto del arrray, osea cada fila que vemos que incluye id y name
  //si el nombre empieza por "A", devolvemos "anacleto"((

  if (usuario.name.startsWith("A")) {
    return "Anacleto";
  }
  //si no, devolvemos el nombre tal cual
  return usuario.name;
});

/*3.3 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y añade al valor de .name el string ' (Visitado)'
cuando el valor de la propiedad isVisited = true.*/
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const listaCiudades = cities.map((ciudad) => {
  if (ciudad.isVisited) {
    return ciudad.name + "(Visitado)";
  }
  return ciudad.name;
});

console.log(listaCiudades);
