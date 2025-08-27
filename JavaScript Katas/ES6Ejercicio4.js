/*4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean mayor que 18*/
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayores18 = ages.filter((edad) => 18);
console.log(mayores18);

/*4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean par.*/
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const numerosPares = ages1.filter((edad) => edad % 2 === 0);
console.log(numerosPares);

/*4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const streamersLoL = streamers.filter(
  (streamer) => streamer.gameMorePlayed === "Leage of Legends"
);
console.log(streamersLoL);

/*4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
usar la funcion .includes() para la comprobación.*/
const streamers1 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamersConU = streamers1.filter((streamer) =>
  streamer.name.includes("u")
);
console.log(streamersConU);

/*4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
.age sea mayor que 35.*/

const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

//filtro los streamers con legends

const streamersFiltered = streamers2.filter((streamer) =>
  streamers.gameMorePlayed.includes("Legends")
);

//ahora que ya tengo los que tienen LOL transformo a mayusculas si age > 35

const result = streamersFiltered.map((streamer) => {
  //si tiene más de 35, lo pongo en mayusculas
  if (streamer.age > 35) {
    return {
      ...streamer,
      gameMorePlayed: streamer.gameMorePlayed.toUpperCase(),
    };
  }
  //si no, lo devolvemos tal cual
  return streamer;
});

console.log(result);
