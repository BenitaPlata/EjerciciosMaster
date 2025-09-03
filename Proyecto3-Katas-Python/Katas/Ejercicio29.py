'''Crea una función que convierta una variable en una cadena de texto y enmascare todos los caracteres con el carácter '#' excepto los últimos cuatro.'''

# LÓGICA: Queremos una función que reciba cualquier variable (int, float, etc.).
# Primero, convertimos la variable a cadena de texto usando str().
# Después, necesitamos enmascarar todos los caracteres con # excepto los últimos 4.
# Si la cadena tiene menos de 4 caracteres, no enmascaramos nada.

# Paso 1: Crear la función para enmascarar
def enmascarar(variable):
    texto = str(variable)  # convertir cualquier tipo a cadena
    if len(texto) <= 4:
        return texto  # no enmascarar si tiene 4 o menos caracteres
    return '#' * (len(texto) - 4) + texto[-4:]  # genero  los  # para los caracteres que quiero ocultar y con texto[-4] tomo los últimos 4 caracteres  y los respeto


# Paso 2: Probar la función enmascarar
print(enmascarar(123456789))    # debería mostrar "#####6789"
print(enmascarar("abcdef"))     # debería mostrar "##cdef"
print(enmascarar("1234"))       # debería mostrar "1234" (no se enmascara)
print(enmascarar(987))          # debería mostrar "987" (no se enmascara)
print(enmascarar(1234567.89))   # debería mostrar "#####7.89"

