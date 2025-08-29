'''Escribe una función que calcule el factorial de un número de manera recursiva.'''


def factorial(n):
    # Caso base
    if n == 0:
        return 1
    # Caso recursivo
    else:
        return n * factorial(n-1)

#Probamos
print(factorial(5))  
print(factorial(0))  
