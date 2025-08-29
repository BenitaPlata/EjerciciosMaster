'''Escribe un programa que pida al usuario dos números e intente dividirlos. Si el usuario ingresa un valor no numérico o intenta dividir por cero, maneja esas excepciones de manera adecuada y muestra un mensaje indicando si la división fue exitosa o no.'''

# PASO 1: pedir los valores al usuario

num1 = input("Introduce el primer número: ")
num2 = input("Introduce el segundo número: ")

#PASO 2: comprobamos que son números, porque podrían ser letras

#Intentamos convertir a float para comprobar si es número o texto
try:
    a = float(num1)
    b = float (num2)
    resultado = a / b # probamos tb si se quiere dividir por 0


except ValueError:
    print ("Error: debes introducir un número válido.")
except ZeroDivisionError:
    print("Error: No se puede dividir entre cero.")
else:
    print(f"La división fue exitosa. Resultado: {resultado}")