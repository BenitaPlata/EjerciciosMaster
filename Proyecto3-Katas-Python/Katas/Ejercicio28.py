'''Crea una función que busque y devuelva el primer elemento duplicado en una lista dada.'''

# lÓGICA: La función recibe una lista, busca y el primer elemento que se repita y lo devuelve.
#Tenemos que recorrer la lista y lear un registro de los elementos que ya hemos usado, con un conjunto (set)
#Cuando encontramos un elemento repetido, ese es el primer duplicado y se devuelve

# Paso 1: Crear la función para encontrar el primer duplicado
def primer_duplicado(lista):
    vistos = set()  # Inicializa un conjunto vacío para guardar los elementos ya revisados
    for elemento in lista: # Recorre cada elemento de la lista
        if elemento in vistos: # Si el elemento ya estaba en el conjunto, es duplicado
            return elemento  # devolvemos  el primer duplicado encontrado
        vistos.add(elemento) # Si no está duplicado, lo añadimos al conjunto
    return None  # si no hay duplicados


# Paso 2: Probar la función primer_duplicado
print(primer_duplicado([2, 5, 1, 2, 3, 5]))   # debería mostrar 2
print(primer_duplicado([1, 2, 3, 4, 5]))      # debería mostrar None
print(primer_duplicado([7, 8, 9, 7, 8, 9]))   # debería mostrar 7
print(primer_duplicado([10, 20, 10, 20, 30])) # debería mostrar 10
