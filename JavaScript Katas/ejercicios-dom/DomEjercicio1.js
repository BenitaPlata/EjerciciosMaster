//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const button = document.querySelector(".showme"); //Devuelve el primero que encuentra
console.log(button);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const title = document.querySelector("#pillado");
console.log(title);

//1.3 Usa querySelector para mostrar por consola todos los p

const p = document.querySelectorAll("p"); //devuelve todos
console.log(p);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemons = document.querySelectorAll(".pokemon");
console.log(pokemons);

//1.5 Usa querySelector para mostrar por consola todos los elementos con
//el atributo data-function="testMe".

const elements = document.querySelectorAll('[data-function = "testMe"]');

for (const element of elements) {
  console.log(element);
}

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
//data-function="testMe".

const allElement = document.querySelectorAll('[data-function="testMe"]');

const thirdElement = allElement[2];

console.log(thirdElement);
