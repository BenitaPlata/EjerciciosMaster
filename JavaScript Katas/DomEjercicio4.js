/*Ejercicio 4
Dado el siguiente HTML:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
	<input class="click" type="text"/>
	<input class="focus" type="text"/>
	<input class="value" type="text"/>
    <button id="btnToClick">Haz clic aquí</button> //CREO MI BOTÓN EN HTML

</body>
</html>*/

/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
evento click que ejecute un console log con la información del evento del click*/

const button = document.getElementById("btnToClick"); // SELECCIONO EL BOTÓN CON EL ID btnToClick
button.addEventListener("click", function (e) {
  // SE LE AÑADE EL EVENTO CLICK
  console.log(e); // muestro por conosola el parámetro e que le pasamos a la funcion que representa el evento que acaba de ocurrir, en este caso un click
});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusInputs = document.getElementsByClassName("focus"); // BUSCO LOS ELEMENTOS CON LA CLASE "focus"
const focusInput = focusInputs[0]; // SELECCIONO EL PRIMER ELEMENTO CON LA CLASE "focus"
focusInput.addEventListener("focus", function (e) {
  // SE LE AÑADE EL EVENTO "focus"
  console.log(e.target.value); //
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputs = document.getElementsByClassName("value"); // BUSCO LOS ELEMENTOS CON LA CLASE "value" Y ME DEVUELVE UNA COLECCION CON ESOS ELEMENTOS
const input = inputs[0]; // COMO IMPUTS ES UNA COLECCIÒN,SELECCIONO EL PRIMER ELEMENTO [0] CON LA CLASE "value"
input.addEventListener("input", function (e) {
  // SE LE AÑADE EL EVENTO "input", QUE SE EJECUTA CUANDO SE ESCRIBE O SE MODIFICA ALGO EN EL INPUT. e ES EL OBJETO DEL EVENTO
  console.log(e.target.value); // MUESTRO POR CONSOLE EL VALOR DEL INPUT QUE SE EJECUTA EL EVENT
});
