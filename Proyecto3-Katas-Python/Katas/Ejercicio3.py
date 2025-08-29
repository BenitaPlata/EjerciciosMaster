'''Escribe una función que tome una lista de palabras y una palabra objetivo como parámetros. La función debe devolver una lista con todas las palabras de la lista original que contengan la palabra objetivo.'''

#función

def buscarPalabras(lista, objetivo):
    resultado = [] #guardo aquí cada palabra que contenga la palabra objetivo
    for palabra in lista: #para cada palabra que hay en la lista ..
        if objetivo in palabra:
            resultado.append(palabra)
    return resultado


#comprobamos

lista = ['hola', 'adios', 'holaholi', 'hastaluego', 'holanda']
objetivo = 'hola'

print(buscarPalabras(lista,objetivo))