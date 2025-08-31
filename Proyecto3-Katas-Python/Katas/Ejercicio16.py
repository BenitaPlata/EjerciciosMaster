'''Escribe una función que tome una cadena de texto y un número entero n como parámetros y devuelva una lista de todas las palabras que sean más largas que n. Usa la función filter().'''

#PASO1: DEFINIMOS LA FUNCION (frase cadena texto que recibimos, n longitud minima que deben tener las palabras para incluirse)

def palabras_mas_largas(frase, n):
    palabras = frase.split()
    filtradas = list(filter(lambda palabra: len(palabra, n), palabras))
    return filtradas

#PRUEBO
print(palabras_mas_largas("Me gusta programar en Python mucho", 2))
print(palabras_mas_largas("Me gusta programar en Python mucho", 4))
print(palabras_mas_largas("Me gusta programar en Python mucho", 6))





