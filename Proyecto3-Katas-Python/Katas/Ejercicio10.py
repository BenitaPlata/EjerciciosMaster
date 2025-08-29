'''Escribe una función que reciba una lista de números y calcule su promedio. Si la lista está vacía, lanza una excepción personalizada y maneja el error adecuadamente'''

#paso 1: CREO EXCEPCION PERSONALIZADA
class ListaVaciaError (Exception):
    pass

#paso 2: DEFINO LA FUNCIÓN PARA CALCULAR EL PROMEDIO
def calcular_promedio (lista_numeros):
    if len(lista_numeros) == 0:
        raise ListaVaciaError("La lista está vacía, no se puede calcular el promedio.") #Si está vacía la lista, lanzamos nuestra excepción

    promedio = sum(lista_numeros) / len(lista_numeros)
    return promedio

#paso 3 : MANEJAMOS LA EXCEPCIÓN AL LLAMAR A LA FUNCIÓN

try:
    numeros = []  # prueba con una lista vacía
    resultado = calcular_promedio(numeros)
    print(f"El promedio es: {resultado}")
except ListaVaciaError as e:
    print(f"Error: {e}")
