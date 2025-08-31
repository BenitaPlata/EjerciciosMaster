'''Crea una función que tome una lista de dígitos y devuelva el número correspondiente. Por ejemplo, [5,7,2] corresponde al número 572. Usa la función reduce().'''

#PASO1: IMPORTO FUNCTOOLS  PORQUE NECESITO REDUCE, PORQUE ACUMULA RESULTADO A PARTIR DE UNA LISTA, TOMA DOS ELEMENTOS  A LA VEZ, COMBINA CON LA FUNCION Y GUARDA EL RESULTADO COMO ACUMULADOR
from functools import reduce

#PASO2: DEFINO MI FUNCION, USO LA FUNCION ANONIMA LAMBDA
# X ES EL ACUMULADOR, Y EL SIGUIENTE DIGITO DE LA ISTA, X*10+Y OPERACION QUE CONSTRUYE EL NUMERO
def lista_a_numero (digitos):
    return reduce(lambda x, y : x*10 + y, digitos)