# ==========================
# Ejercicio: Frecuencia de letras
# Escribe una función que reciba una cadena de texto y devuelva un diccionario
# con la frecuencia de cada letra. Los espacios y símbolos no se cuentan.
# ==========================

# Declaramos la función
def frecuencia_letras(texto):
    """
    Recibe una cadena de texto y devuelve un diccionario con la frecuencia
    de cada letra en la cadena. Los espacios y símbolos se ignoran.
    """
    
    # Paso 1: Normalizamos todo a minúsculas para que 'A' y 'a' se cuenten igual
    texto = texto.lower()

    # Paso 2: Creamos un diccionario vacío donde guardaremos la frecuencia de cada letra
    frecuencias = {}

    # Paso 3: Recorremos cada carácter de la cadena
    for letra in texto:
        # Paso 4: Solo procesamos si es una letra (ignoramos espacios, números y símbolos)
        if letra.isalpha():
            # Paso 5: Si la letra ya está en el diccionario, sumamos 1 a su contador
            if letra in frecuencias:
                frecuencias[letra] += 1
            # Paso 6: Si la letra no está, la agregamos con valor 1
            else:
                frecuencias[letra] = 1

    # Paso 7: Devolvemos el diccionario con todas las letras y su frecuencia
    return frecuencias


# ==========================
# Prueba de la función
# ==========================
resultado = frecuencia_letras("Hola mundo!")
print(resultado)
# Salida esperada (el orden puede variar)
# {'h': 1, 'o': 2, 'l': 1, 'a': 1, 'm': 1, 'u': 1, 'n': 1, 'd': 1}
