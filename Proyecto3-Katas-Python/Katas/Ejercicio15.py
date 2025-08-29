
'''Crea una función lambda que sume 3 a cada número de una lista dada.'''


#LISTA EJEMPLO
numeros = [1, 2, 3, 4, 5]

#sumamos tres a cada número con la función lambda, map aplica esa función a cada elemento de la lista y con list lo convertimos en una lista normal
resultado = list(map(lambda x: x + 3, numeros))

print(resultado)

