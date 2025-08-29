'''Crea una función que retorne las palabras de una lista que comiencen con una letra en específico. Usa la función filter().'''


#PASO1: DEFINIMOS LA FUNCIÓN con la lista de palabras que recibimos y la lentra con la que deben comenzar las palabras
def palabras_por_letra(lista_palabras, letra):
        
        #Filter recibe una función que devuelve true o false para cada elemento y queremos quedarnos con las palabras que commiencen con letra
        #lambda... función que devuelve true si la palabra empieza por la letra dada
        resultado = list(filter(lambda palabra: palabra.startswith(letra), lista_palabras))

#PASO2: DEVOLVEMOS EL RESULTADO
        return resultado

#PASO4: EJEMPLO
palabras = ["manzana", "banana", "mango", "pera", "melon"]
resultado = palabras_por_letra(palabras, "m")
print(resultado)


