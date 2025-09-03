'''Crea una función lambda que calcule el resto de la división entre dos números dados.'''

# LÓGICA: lambda tiene que recibir dos números y devuelva el resto de la división, usamos para ello el operador % que nos da el resto de una división

# Paso 1: Crear la función lambda que calcula el resto
resto = lambda x, y: x % y

# Paso 2: Probar la función lambda
print(resto(10, 3))   # debería mostrar 1
print(resto(25, 4))   # debería mostrar 1
print(resto(9, 2))    # debería mostrar 1
print(resto(20, 5))   # debería mostrar 0
