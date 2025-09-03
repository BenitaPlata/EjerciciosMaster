'''Crea una función que cuente el número de caracteres en una cadena de texto dada.'''

# LÓGICA: Función que reciba cadena texto y cuente el númeor de caracteres. Se puede usar len()

# Paso 1: Crear la función que cuente caracteres
#Defino función que reciba un parámetro cadena
#Return devuelve el número de caracteres con len()
def contar_caracteres(cadena):
    return len(cadena)


# Paso 2: Probar la función
print(contar_caracteres("Hola mundo"))   # debería mostrar 10
print(contar_caracteres("Python"))       # debería mostrar 6
print(contar_caracteres("12345!@#"))     # debería mostrar 8
