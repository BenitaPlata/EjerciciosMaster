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
const divCountries = document.createElement("div"); //creo un div
document.body.appendChild(divCountries); //lo agrego al body

for (const country of countriesList) {
  // bucle for of para recorrer el array
  const divCountry = document.createElement("div"); //para cada objeto del array creo un div
  const title = document.createElement("h4"); // creo un h4
  title.textContent = country.title; // le pongo el texto del titulo
  divCountry.appendChild(title); // lo agrego al div
  const img = document.createElement("img"); // creo un img
  img.src = country.imgUrl; // le pongo la url del a imagen
  divCountry.appendChild(img); // lo agrego al div

  divCountries.appendChild(divCountry); // lo agrego al div principal
}

//3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//elemento de la serie de divs.

const button = document.createElement("button"); // creo un boton
button.textContent = "Eliminar último elemento"; // le pongo texto
document.body.appendChild(button); // lo agrego al body porque si lo agrego al div podría eliminarlo :)
button.addEventListener("click", function () {
  // agrego un evento click al boton
  divCountries.lastElementChild.remove(); // elimino el último elemento
});

//3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
//divs que elimine ese mismo elemento del html.
const countriesList2 = [
  { title: "Random title", imgUrl: "<https://picsum.photos/300/200?random=1>" },
  { title: "Random title", imgUrl: "<https://picsum.photos/300/200?random=2>" },
  { title: "Random title", imgUrl: "<https://picsum.photos/300/200?random=3>" },
  { title: "Random title", imgUrl: "<https://picsum.photos/300/200?random=4>" },
  { title: "Random title", imgUrl: "<https://picsum.photos/300/200?random=5>" },
];

//REUTILIZO EL CÓDIGO ANTERIOR Y MODIFICO LO QUE ME PIDEN
const divCountries2 = document.createElement("div"); //creo un div
document.body.appendChild(divCountries2); //lo agrego al body

for (const country of countriesList) {
  // bucle for of para recorrer el array (en cada vuelta country es un objeto con title y imgUrl)
  const divCountry = document.createElement("div"); //para cada objeto del array creo un divcountry que va a contener el titulo, la imagen y un botón
  const title = document.createElement("h4"); // creo un h4
  title.textContent = country.title; // le pongo el texto del titulo
  divCountry.appendChild(title); // lo agrego al div
  const img = document.createElement("img"); // creo un img
  img.src = country.imgUrl; // le pongo la url del a imagen
  divCountry.appendChild(img); // lo agrego al div

  //CREO UN BOTON PARA CADA DIV
  const button = document.createElement("button"); //creo el botón
  button.textContent = "Eliminar"; // le pongo texto
  divCountry.appendChild(button);
  button.addEventListener("click", function () {
    //añado un envento al botón que escucha el click
    this.parentNode.remove(); // this se refiere al botón que fue pulsado. parentnode es el nodo padre del botón que es el < class= "divCountry">  AL LLAMAR ESTO LE DIGO: ELIMINA EL DOM DEL PADRE DE ESTE BOTÓN, OSEA EL DIV QUE CONTIENEN EL BOTÓN Y TAMBIÉN EL TÍTULO Y LA IMAGEN
  });

  divCountries2.appendChild(divCountry); // lo agrego al div principal ahora, ya que el divCountry está completamente formado con todos sus hijos
}
