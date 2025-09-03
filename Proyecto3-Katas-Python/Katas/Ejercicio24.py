'''Calcula la diferencia total en los valores de una lista. Usa la función reduce().'''

# lÓGICA: Tenemos una lista de números y queremos calcular la diferencia, osea restarlos 

# Paso 1: creamos la lista
numeros = [1240, 450, 24, 1, 0]

# Paso 2: importo reduce y creo mi función lambda
from functools import reduce

diferencia = reduce(lambda x, y: x - y, numeros)


# Paso 3: probamos nuestra función
print(diferencia)