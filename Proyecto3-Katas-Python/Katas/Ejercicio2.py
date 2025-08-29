'''Dada una lista de números, obtén una nueva lista con el doble de cada valor. Usa la función map().'''

#creo una función que dobla un número
def duplicar (x):
    return  x * 2


#creo una función que recibe una lista de números y devuelve otra con el doble de cada uno
#map , aplica la funcion duplicar a cada número de la lista
#list(...) convierte el resultado en una lista normal
def dobles(numeros):
    return list(map(duplicar, numeros))


#comprobamos
lista = [1, 2, 3, 4, 5]
print(dobles(lista))