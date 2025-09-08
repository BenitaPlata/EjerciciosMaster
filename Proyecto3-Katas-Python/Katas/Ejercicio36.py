'''Crea una función llamada procesar_texto
- Procesa un texto según la opción especificada: contar_palabras, reemplazar_palabras o eliminar_palabra.
- Código a seguir:
    -Crear una función contar_palabras que cuente el número de veces que aparece cada palabra en el texto y devuelva un diccionario.
    - una función reemplazar_palabras para sustituir una palabra_original por una palabra_nueva en el texto y devolver el texto modificado.
    -Crear una función eliminar_palabra que elimine una palabra del texto y devuelva el texto sin ella.
    -Crear la función procesar_texto que reciba un texto, una opción ("contar", "reemplazar", "eliminar") y un número variable de argumentos según la opción elegida.
- Caso de uso:
    -Verificar el funcionamiento completo de procesar_texto.'''


# LÓGICA:
'''Queremos procesar un texto con varias opciones:

1. contar_palabras(texto) → devuelve un diccionario con la cantidad de veces que aparece cada palabra.

2. reemplazar_palabras(texto, palabra_original, palabra_nueva) → devuelve el texto con la palabra original reemplazada por la nueva.

3. eliminar_palabra(texto, palabra) → devuelve el texto eliminando todas las apariciones de esa palabra.

4. *procesar_texto(texto, opcion, args) → función principal que llama a la función correcta según la opción:

    - "contar" → contar_palabras(texto)

    - "reemplazar" → reemplazar_palabras(texto, palabra_original, palabra_nueva)

    - "eliminar" → eliminar_palabra(texto, palabra)'''       

#PASO 1: definir funciones auxiliares

# Función para contar palabras
def contar_palabras(texto):
    palabras = texto.split() #split separa el texto por espacios y devuelve una lista de palabras
    contador = {} # creamos un diccionario vacío que guarda las palabras como clave y el número de veces que aparecen como valor.
    for palabra in palabras: # recorremos cada palabra de la lista palabras
        palabra = palabra.lower()  # convertimos cada palabra en minúscula
        #busca la palabra en el diccionario: si la encuentra devuelve su valor (número de veces que apareció); si no la encuentra devuelve 0 (de ahí el 0)Luego se suma 1 para ocntar esa nueva aparición. Y finalmente se guarda en el diccionario de nuevo
        contador[palabra] = contador.get(palabra, 0) + 1
    return contador

# Función para reemplazar palabras
def reemplazar_palabras(texto, palabra_original, palabra_nueva):
    #busca todas las apariciones de vieja en el texto y las sustituye por nueva. Devuelve un nuevo string con los cambios aplicados
    return texto.replace(palabra_original, palabra_nueva)

# Función para eliminar palabras
def eliminar_palabra(texto, palabra):
    #texto.split comiverte el texto en una lista de palabras 
    #p for.. --> crea una lista con cada palabra p en el texto, pero solo si p es diferente de la palabra quq quiero eliminar. Crea una lista nueva sin l apalabra a eliminar. join vuelve a unir las palabras en un string con espacios
    return " ".join([p for p in texto.split() if p != palabra])


#PASO 2: función principal: procesar_texto

def procesar_texto(texto, opcion, *args):
    # texto: el texto que vamos a procesar
    # opcion: puede ser "contar", "reemplazar" o "eliminar"
    # args: argumentos adicionales que dependen de la opción elegida

    if opcion == "contar":
        # Si la opción es "contar", llamamos a contar_palabras
        # No necesita argumentos extra
        return contar_palabras(texto)

    elif opcion == "reemplazar":
        # Para reemplazar necesitamos 2 argumentos: palabra_original y palabra_nueva
        if len(args) != 2:
            raise ValueError("Para 'reemplazar' se requieren 2 argumentos: palabra_original y palabra_nueva")
        # args[0] → palabra_original, args[1] → palabra_nueva
        return reemplazar_palabras(texto, args[0], args[1])

    elif opcion == "eliminar":
        # Para eliminar solo necesitamos 1 argumento: la palabra a eliminar
        if len(args) != 1:
            raise ValueError("Para 'eliminar' se requiere 1 argumento: palabra a eliminar")
        # args[0] → palabra que queremos borrar del texto
        return eliminar_palabra(texto, args[0])

    else:
        raise ValueError("Opción no válida. Usa 'contar', 'reemplazar' o 'eliminar'.")

#PASO 3: caso de uso
texto = "Python es genial y Python es divertido"

# Contar palabras
print(procesar_texto(texto, "contar"))

# Reemplazar "Python" por "Java"
print(procesar_texto(texto, "reemplazar", "Python", "Java"))

# Eliminar la palabra "es"
print(procesar_texto(texto, "eliminar", "es"))

