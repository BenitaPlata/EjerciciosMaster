/*Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página, algo así:

Os aportamos el HTML sobre el que haremos el ejercicio:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="index.js" defer></script>
</head>
<body>
    <select id="character-list"></select>
    <div>
        <img class="character-image">
    </div>
</body>
</html>

Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

URL de la documentación (para que indaguéis): https://thronesapi.com/

Esta sería la URL final (la que deberéis utilizar para vuestra petición):

https://thronesapi.com/api/v2/Characters*/

//petición a la api. Con fetch pedimos datos de todos los personajes

const select = document.getElementById("character-list");
const img = document.querySelector(".character-image");

fetch("https://thronesapi.com/api/v2/Characters")
  .then((res) => res.json())
  .then((characters) => {
    characters.forEach((character) => {
      const option = document.createElement("option");
      option.value = character.imageUrl;  // guardamos la URL de la imagen
      option.textContent = character.fullName; // mostramos el nombre
      select.appendChild(option);
    });
  });

// Cambiamos la imagen cuando se selecciona un personaje
select.addEventListener("change", (event) => {
  img.src = event.target.value;
});
