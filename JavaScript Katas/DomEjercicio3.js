/*Dado el siguiente HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="exercise-1.js" defer></script>
    <title>Document</title>
</head>
<body>
    <p class="fn-remove-me">Bye bye</p>
		<div data-function="printHere"></div>
</body>
</html>*/

//3.1 Basandote en el array siguiente, crea una lista ul > li
//dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const ul = document.createElement("ul");
document.body.appendChild(ul);
for (let i = 0; i < countries.length; i++) {
  const li = document.createElement("li");
  li.textContent = countries[i];
  ul.appendChild(li);
}

//3.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementRemove = document.querySelector(".fn-remove-me");
elementRemove.remove();

//3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
//en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const divCars = document.querySelector('[data-function="printHere"]'); // busco el div con el atributo y lo guardo en divCars
const ulCars = document.createElement("ul"); //creo un ul  y lo guardo en ulCars
divCars.appendChild(ulCars); //lo agrego al div
for (const car of cars) {
  //recorro el array de coches
  const liCars = document.createElement("li"); // por cada coche creo un li
  liCars.textContent = car; // le pongo el texto del coche
  ulCars.appendChild(liCars); // lo agrego a la lista
}

//3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
//h4 para el titulo y otro elemento img para la imagen.
const countriesList = [
  { title: "Random title", imgUrl: "<https://picsum.photos/300/200?random=1>" },
  { title: "Random title", imgUrl: "<https://picsum.photos/300/200?random=2>" },
  { title: "Random title", imgUrl: "<https://picsum.photos/300/200?random=3>" },
  { title: "Random title", imgUrl: "<https://picsum.photos/300/200?random=4>" },
  { title: "Random title", imgUrl: "<https://picsum.photos/300/200?random=5>" },
];

//3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//elemento de la serie de divs.

//3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
//divs que elimine ese mismo elemento del html.
