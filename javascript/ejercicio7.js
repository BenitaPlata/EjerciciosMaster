//EJERCICIO7 
// Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.


function greaterNumber(numberOne , numberTwo) {
  
if(numberOne > numberTwo){
    console.log('El número mayor es ' + numberOne);
} else if(numberOne < numberTwo){
    console.log('El número mayor es ' + numberTwo);
}else{
    console.log('Los números son iguales');
}

}

greaterNumber(10,5);
greaterNumber(5,7);
greaterNumber(10,10);