/*Dado el siguiente HTML:

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h2 class="fn-insert-here"></h2>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <p>No me elimines!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <div></div>
    <div></div>
    <div class="fn-insert-here"></div>
    <div class="fn-insert-here"></div>
  </body>
</html>*/

//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const newDivText = document.createElement("div"); //creo mi div vacio y lo guardo en la variable newDivText
document.body.appendChild(newDivText); //inserto el div creado dentro del body
const newText = document.createElement("p"); //creo mi p y lo guardo en newText
newText.textContent = "Hola mundo"; //añado texto a mi p
newDivText.appendChild(newText); //inserta el p dentro del div

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
//loop con javascript.

const newDivLoop = document.createElement("div");
document.body.appendChild(newDivLoop);

for (let i = 0; i < 6; i++) {
  const newP = document.createElement("p");
  newDivLoop.appendChild(newP);
  newP.textContent = "Párrafo " + (i + 1);
}

//2.4 Inserta dinamicamente con javascript en un html una p con el
//texto 'Soy dinámico!'.

const newText2 = document.createElement("p");
newText2.textContent = "Soy dinámico!";
document.body.appendChild(newText2);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector(".fn-insert-here"); //busco el h2 con la clase .fn-insert-here y lo guardo en la variable h2
h2.textContent = "Wubba Lubba dub dub"; //inserto el texto

//2.6 Basandote en el siguiente array crea una lista ul > li con
//los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const newUl = document.createElement("ul"); //creo mi ul y lo guardo en la variable newUl
for (let i = 0; i < apps.length; i++) {
  //recorro el array apps
  const newLi = document.createElement("li"); //en cada vuelta creo un li y lo guardo en la variable newLi
  newLi.textContent = apps[i]; //añado el texto del array en cada li creado
  newUl.appendChild(newLi); //inserto el li creado dentro del ul
}
document.body.appendChild(newUl); // inserto el ul creado dentro del body

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsRemove = document.querySelectorAll(".fn-remove-me"); //busco todos los nodos que tengan la clase .fn-remove-me y los guardo en la variable elementsRemove
for (const elementRemove of elementsRemove) {
  elementRemove.remove(); //elimino cada nodo que tenga la clase .fn-remove-me
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//Recuerda que no solo puedes insertar elementos con .appendChild.

const twoDivs = document.querySelectorAll("div"); //busco todos los div y los guardo en la variable twoDivs

const newP = document.createElement("p"); //creo un p y lo guardo en la variable newP
newP.textContent = "Voy en medio!";

document.body.insertBefore(newP, twoDivs[1]); //inserto el p creado antes del segundo div (twoDivs y lo referencio con 1 porque 0 el es primero)

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
//.fn-insert-here

const divsInsert = document.querySelectorAll(".fn-insert-here"); //busco todos los div con la clase .fn-insert-here y los guardo en la variable divsInsert
for (let i = 0; i < divsInsert.length; i++) {
  // hago un bucle for para recorrer todos los divs
  const newP = document.createElement("p"); // creo un p y lo guardo en la variable newP
  newP.textContent = "Voy dentro!"; // le doy el texto al p
  divsInsert[i].appendChild(newP); // inserto el p dentro de cada div
}
