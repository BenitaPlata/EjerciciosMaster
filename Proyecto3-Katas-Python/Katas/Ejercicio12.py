'''Genera una función que, al recibir una frase, devuelva una lista con la longitud de cada palabra. Usa la función map().'''

#paso 1: RECIBIR LA FRASE COMO PARÁMETRO
def longitudes_palabras(frase):
    palabras = frase.split() #con split la cadena de palabras se convierte en una lista de palabras (osea la frase en una lista)


#paso 2: APLICO MAP() CON LEN (TRASNFORMO CADA PALABRA EN SU LONGITUD)
    longitudes = list(map(len, palabras)) #con map aplico len  a cada palabra de la lista, nos devuelve un objeto tipo map que convertimos en lista

#paso 3: DEVOLVER EL RESULTADO
    return longitudes


#paso 4: PROBAMOS

resultado = longitudes_palabras("Hola mundo super super bonito")
print(resultado)  
