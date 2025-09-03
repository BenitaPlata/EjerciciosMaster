'''Concatena una lista de palabras. Usa la función reduce().'''

# lÓGICA: tenemos una lista de palabras separadas por comas y queremos unirlas en una sola cadena de texto

from functools import reduce

# Paso 1: Crear la lista de palabras
palabras = ["Hola", "mundo", "esto", "es", "Python"]

# Paso 2: Concatenar todas las palabras con reduce
#lambda recibe dos palabras y las concatena, reduce repite este proceso hasta que la lista se queda en una cadena. Guardamos el resultado en la variable frase
frase = reduce(lambda x,y: x + y, palabras ) 

# Paso 3: Mostrar la frase resultante
print(frase)
