'''Crea una función que calcule el promedio de una lista de números.'''

# LÓGICA: El promedio se calcula como suma de todos los números/cantidad de números. Podemos usar para lo primero sum(lista) y para lo segundo len(lista)

# Paso 1: Crear la función para calcular el promedio
def promedio(lista):
    return sum(lista) / len(lista)

# Paso 2: Probar la función promedio
print(promedio([10, 20, 30, 40, 50]))   # debería mostrar 30
print(promedio([5, 15, 25]))            # debería mostrar 15
print(promedio([100, 200, 300, 400]))   # debería mostrar 250
