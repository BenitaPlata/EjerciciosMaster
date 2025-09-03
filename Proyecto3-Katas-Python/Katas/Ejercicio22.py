'''Dada una lista numérica, obtén el producto total de los valores. Usa la función reduce().'''

# Importo reduce
from functools import reduce

# Paso 1: Crear la lista de números
numeros = [2, 3, 4, 5]

# Paso 2: Calcular el producto total con reduce (que recorre la lista de números)
producto_total = reduce(lambda x, y: x * y, numeros) #lambda multiplica todos los elementos de la lista (multiplica el acumulador x por el siguiente elemento y), el resultado se guarda en producto total

# Paso 3: Mostrar el resultado
print(producto_total)
