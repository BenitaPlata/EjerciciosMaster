'''Genera una función que calcule la diferencia entre los valores de dos listas. Usa la función map().'''

#Creamos dos listas
lista1 = [10, 20, 30, 40]
lista2 = [1, 2, 3, 4]

#Defino función que hace la resta
def restar(a, b):
    return a - b

#Función principal que usa map
#map aplica esa función a cada par de elementos de la lista iterando sobre ellos
def diferencia_listas (lista1, lista2):
    return list(map(restar, lista1, lista2))

#Probamos llamando a mi función que guarda en list los resultados, y esos resultados los guardo ahora en la variable resultado
resultado = diferencia_listas(lista1, lista2)
print(resultado)


