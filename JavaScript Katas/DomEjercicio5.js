/*Ejercicio 5
Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.*/

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// CREO TITULO Y LO AÑADO AL BODY
const title = document.createElement("h1");
title.textContent = "Albums recomendados";
title.style.fontFamily = "Arial, sans-serif";
title.style.color = "#333";
title.style.marginBottom = "10px";
document.body.appendChild(title);

// CREO UL Y LO AÑADO AL BODY
const ul = document.createElement("ul"); // Creamos un elemento ul
ul.style.fontFamily = "Arial, sans-serif";
ul.style.listStyleType = "disc"; // puntos normales
ul.style.paddingLeft = "20px";
ul.style.color = "#555";

for (const album of albums) {
  // Recorremos el array de albums
  const li = document.createElement("li"); // Creamos un elemento li para cada album
  li.textContent = album; // Le asignamos el texto del album

  li.style.marginBottom = "6px"; // Espacio entre cada album
  ul.appendChild(li); // Agregamos el li al ul
}

document.body.appendChild(ul); // Agregamos el ul al body

// También un poco de margen al body para que no quede pegado
document.body.style.margin = "20px";
