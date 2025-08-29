'''Genera una función que, para un conjunto de caracteres, devuelva una lista de tuplas con cada letra en mayúsculas y minúsculas. Las letras no pueden estar repetidas. Usa la función map().'''

#paso1: DEFINIR LA FUNCIÓN
def mayus_minus(caracteres):

#recibirá un conjunto (set) de caracteres, set ya elimina duplicados, por tanto tenemos eso resuelto

#paso 3: CREO TUPLAS CON MAYUSCULAS Y MINUSCULAS Y LO HAGO CON MAP
#lambda .. forma rápida de escribir una función que no necesita nombre donde recibe c y devuelve esa c en mayúsculas y minúsculas
    resultado = list(map(lambda c: (c.upper(), c.lower()), caracteres))

#DEVUELVO LA LISTA
    return resultado

#paso 4: EJEMPLO
conjunto = {"a", "b", "c", "A"}
resultado = mayus_minus(conjunto)
print(resultado)



