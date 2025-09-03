'''Crea una función lambda que sume elementos correspondientes de dos listas dadas.''' 

# LÓGICA: Tenemos dos listas de números de igual longitud, queremos sumar los elementos correspondientes de cada lista.
# Podemos usar map() (aplica la función a cada par de elementos de las listas) junto con una función lambda que reciba dos elementos y los sume

# Paso 1: Crear dos listas de ejemplo
lista1 = [1, 2, 3]
lista2 = [4, 5, 6]

# Paso 2: Sumar elementos correspondientes usando map y lambda
# Lambda recibe un elemento de lista1 y lista2 y devuelve su suma
# map aplica esta funicón a cada par de elementos
# list convierte el resultado en una lista final
suma_listas = list(map(lambda x, y: x + y, lista1, lista2))

# Paso 3: Mostrar la lista resultante
print(suma_listas)
