'''Crea una función lambda que filtre los números impares de una lista dada.'''

# PASO1: Lista de ejemplo
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# PASO2: Filtrar los números impares usando lambda y filter
#EXPLICACION LAMBDA: x cada elemento de la lista números, x%2 resto de dividir entre dos, y devuelve true o false 
#Filter toma cada elemento de la lista numeros y aplica la funcion lambda, solo matiene elemento que la funcion devuelve true
#Resultado: un iterador que contiene solo los numeros impares
#List:convierte el resultado en llista para usarlo facilmente
impares = list(filter(lambda x: x % 2 != 0, numeros))

# PASO3: Mostrar resultado
print(impares)
