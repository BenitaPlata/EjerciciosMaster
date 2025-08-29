'''Escribe un programa que pida al usuario que introduzca su edad. Si el usuario ingresa un valor no numérico o un valor fuera del rango esperado (por ejemplo, menor que 0 o mayor que 120), maneja las excepciones adecuadamente.'''

#paso 1 : PIDO LA EDAD AL USUARIO
edad_input = input("Introduce tu edad: ")


#paso 2 : USAMOS TRY EXCEPT PARA MANEJAR ERRORES:
#1. Valor no númerico: valueError
#2. Valor fuera de rango: valueError o excepción personalizada

try:
    edad = int(edad_input) #intentamos convertir a entero para asegurarnos que es un número

    #Verificamos si está en rango y si no, lanzamos otra excepción raise valueError
    if edad < 0 or edad > 120:
        raise ValueError ("Edad fuera de rango permitido (0-120).")
    
except ValueError as e: #captura cualquier error y muestra un mensaje (as e guarda el mensaje de error en la variable e)
    print("Error:", e)
else:
    print(f"Edad válida: {edad}") #se ejecuta si no hubo error