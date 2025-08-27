/*
EJERCICIO 17
For...in: Usa un for...in para imprimir por consola los datos del alienígena.

Debería tener este formato cada uno de los console.log: "La propiedad ____ tiene cómo valor: ____"

Puedes usar este objeto:*/

const alien = {
  name: "Xenomorph",
  species: "Xenomorph XX121",
  origin: "Unknown",
  weight: 180,
};

for (let propiedad in alien) {
  // recorremos cada propiedad del objeto, en cada vuelta la variable propiedad vale el nombre de una propiedad
  console.log(
    `La propiedad ${propiedad} tiene como valor: ${alien[propiedad]}` // con esto último decimos: dame el valor que hay en esta propiedad
  );
}
