'''Crea una función llamada procesar_texto
- Procesa un texto según la opción especificada: contar_palabras, reemplazar_palabras o eliminar_palabra.
- Código a seguir:
    -Crear una función contar_palabras que cuente el número de veces que aparece cada palabra en el texto y devuelva un diccionario.
    - una función reemplazar_palabras para sustituir una palabra_original por una palabra_nueva en el texto y devolver el texto modificado.
    -Crear una función eliminar_palabra que elimine una palabra del texto y devuelva el texto sin ella.
    -Crear la función procesar_texto que reciba un texto, una opción ("contar", "reemplazar", "eliminar") y un número variable de argumentos según la opción elegida.
- Caso de uso:
    -Verificar el funcionamiento completo de procesar_texto.'''

'''
Queremos procesar un texto con varias opciones:

    1. contar_palabras(texto) → devuelve un diccionario con la cantidad de veces que aparece cada palabra.

    2. reemplazar_palabras(texto, palabra_original, palabra_nueva) → devuelve el texto con la palabra original reemplazada por la nueva.

    3. eliminar_palabra(texto, palabra) → devuelve el texto eliminando todas las apariciones de esa palabra.

    4. *procesar_texto(texto, opcion, args) → función principal que llama a la función correcta según la opción:
        -"contar" → contar_palabras(texto)
        -"reemplazar" → reemplazar_palabras(texto, palabra_original, palabra_nueva)
        - "eliminar" → eliminar_palabra(texto, palabra)'''
        