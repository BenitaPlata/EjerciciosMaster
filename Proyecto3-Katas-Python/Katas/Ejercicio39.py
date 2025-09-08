'''Escribe una función que tome dos parámetros: figura (una cadena que puede ser "rectangulo", "circulo" o "triangulo") y datos (una tupla con los datos necesarios para calcular el área de la figura).'''

#LÓGICA
'''
1. Queremos una función, por ejemplo calcular_area(figura, datos).

2. Según la figura que nos pase el usuario:

    - "rectangulo" → necesitamos base y altura → área = base × altura.

    -  "triangulo" → necesitamos base y altura → área = (base × altura) / 2.

    - "circulo" → necesitamos radio → área = π × radio².

3. Para el círculo, importamos pi desde el módulo math.

4. Si la figura no es válida, devolvemos un mensaje de error.'''


#PASO 1: CREAMOS LA FUNCIÓN
import math  # Necesario para usar math.pi

def calcular_area(figura, datos):
   
    if figura.lower() == "rectangulo":
        base, altura = datos  # desempaquetamos la tupla
        return base * altura

    elif figura.lower() == "triangulo":
        base, altura = datos
        return (base * altura) / 2

    elif figura.lower() == "circulo":
        (radio,) = datos  # tupla de un solo valor, poner coma
        return math.pi * radio**2

    else:
        return "Figura no válida"
    

#PASO 2: CASOS DE USO
print(calcular_area("rectangulo", (5, 10)))   # 50
print(calcular_area("triangulo", (4, 6)))     # 12
print(calcular_area("circulo", (3,)))         # 28.274333882308138
print(calcular_area("hexagono", (3,)))        # "Figura no válida"

