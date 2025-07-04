/*Ejercicio 12
Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

Pista: puedes generar un nuevo array y devolverlo.

Puedes usar este array para probar tu función:*/

const list = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(list) {
  const list1 = []; //creo un array vacio que guarda elementos sin repetir

  for (let i = 0; i < list.length; i++) {
    if (!list1.includes(list[i])) {
      // compruebo si el elemento actual de list no está en el array list1
      list1.push(list[i]); //si el elemento no existe en el array vacio lo agrego
    }
  }
  return list1; //devuelvo el array sin elementos duplicados
}

console.log(removeDuplicates(list));
