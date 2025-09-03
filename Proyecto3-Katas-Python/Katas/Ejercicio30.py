'''Crea una función que determine si dos palabras son anagramas, es decir, si están formadas por las mismas letras pero en diferente orden.'''

'''LÓGICA:
- Queremos una función que reciba dos palabras.

- Debemos determinar si son anagramas, es decir:

    -Tienen exactamente las mismas letras.

    -Solo el orden de las letras puede variar.

- La forma más sencilla de comprobarlo es:

    1.Convertir ambas palabras en listas de caracteres.

    2.Ordenar las listas.
    
    3.Comparar si las listas ordenadas son iguales.'''

# Paso 1: Crear la función para comprobar anagramas. Con sorted convertimos la palabra en una lista de letras ordenadas alfabeticamente.
def son_anagramas(palabra1, palabra2):
    return sorted(palabra1) == sorted(palabra2)


# Paso 2: Probar la función son_anagramas
print(son_anagramas("amor", "roma"))       # debería mostrar True
print(son_anagramas("hola", "halo"))       # debería mostrar False
print(son_anagramas("listen", "silent"))   # debería mostrar True
print(son_anagramas("python", "typhon"))   # debería mostrar True
print(son_anagramas("python", "java"))     # debería mostrar False

