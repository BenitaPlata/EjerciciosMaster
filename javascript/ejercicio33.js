/*Ejercicio 33
Desarrolla una función que reciba un país por parámetro y devuelva su capital.

Utiliza un objeto para almacenar los países y sus capitales.

La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.*/

const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  let capital = capitals[country];
  if (!capitals[country]) {
    return `No se encontró la capital de ${country}.`;
  } else {
    return `La capital de ${country} es ${capital}.`;
  }
}

console.log(getCapital("Austria"));
console.log(getCapital("Mexico"));
