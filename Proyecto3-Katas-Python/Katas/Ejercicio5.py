'''Escribe una función que tome una lista de números como parámetro y un valor opcional nota_aprobado (por defecto 5). La función debe calcular la media de los números en la lista y determinar si la media es mayor o igual que nota_aprobado. Si es así, el estado será "aprobado"; de lo contrario, "suspenso". La función debe devolver una tupla que contenga la media y el estado.'''

#Paso 1: Función que reciba lista de numeros y un valor opcional nota_aprobado con valor por defecto 5

def evaluar_media(lista_numeros, nota_aprobados=5):
    #calculo la media (sumo todos y divido entre los elementos)
    media = sum(lista_numeros) / len(lista_numeros)
    
#Paso 2: Determinar estado
    if media >= nota_aprobados:
        estado = 'aprobado' #creo la variable asignandole ese valor si se cumple la condicion
    else:
        estado = 'suspenso' 

#Paso 3: devolver resultado como tupla
    return (media, estado)


#Paso 4: probamos
notas = [3, 5, 8, 1, 10, 4, 7]
resultado = evaluar_media(notas)
print (resultado)
