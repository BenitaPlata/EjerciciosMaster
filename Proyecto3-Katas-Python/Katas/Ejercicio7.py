'''Genera una función que convierta una lista de tuplas a una lista de strings. Usa la función map().'''

#DEFINIMOS LA FUNCIÓN y usamos str()

def tuplas_a_string(lista_tuplas):
    return list(map(str, lista_tuplas)) #toma cada tupla y la pasa a la funcion str convirtiendola en un string y list convierte el resultado (un iterador) en una lista normal


#PROBAR LA FUNCIÓN
lista_tuplas = [(1, 2), (3, 4), (5, 6)]
resultado = tuplas_a_string(lista_tuplas)
print(resultado)  

