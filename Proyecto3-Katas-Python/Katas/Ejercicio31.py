'''Crea una función que solicite al usuario ingresar una lista de nombres y luego un nombre para buscar en esa lista. Si el nombre está en la lista, imprime un mensaje indicando que fue encontrado; de lo contrario, lanza una excepción.'''

'''Queremos una función que haga dos cosas:

        1.Pedir al usuario que ingrese una lista de nombres.

        2.Pedir al usuario que ingrese un nombre a buscar en esa lista.

- Si el nombre está en la lista → imprimimos un mensaje de “encontrado”.

- Si no está → lanzamos una excepción personalizada con raise Exception("mensaje").

- Para pedir los nombres podemos usar input() y separar la entrada en una lista usando .split().1'''

# Paso 1: Crear la función para buscar un nombre en la lista
def buscar_nombre():
    nombres = input("Ingresa una lista de nombres separados solo por espacios, sin comas: ").split() # convierte la entrada del usuario en una lista de nombres
    nombre_buscar = input("Ingresa el nombre a buscar: ")
    
    if nombre_buscar in nombres: #verifica si el nombre existe en la lista
        print(f"{nombre_buscar} fue encontrado en la lista.")
    else:
        raise Exception(f"{nombre_buscar} no se encuentra en la lista.") # lanza una excepción con un mensaje si no se encuentra


# Paso 2: Probar la función
buscar_nombre()
