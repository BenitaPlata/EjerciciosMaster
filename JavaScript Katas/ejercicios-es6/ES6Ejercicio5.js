/*<!doctype html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
</body>
</html>

Dado el siguiente javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'*/

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

//vamos a seleccionar lo que escribe el usuario en el input
const input = document.querySelector(
  'input[data-function= "toFilterStreamers"]'
);

// ahora escuchamos el evento input y cada vez que se escriba algo queremos filtrar
input.addEventListener("input", () => {
  const value = input.value.toLowerCase(); // lo que el ussuario escribe y lo pongo todo en minusculas

  const filtered = streamers.filter(
    (streamer) => streamer.name.toLowerCase().includes(value) // comprobamos si el nombre contiene lo escrito
  );

  console.log(filtered);
});
