'''Genera un programa que nos indique si es de noche, de día o de tarde según la hora proporcionada por el usuario.'''


# Programa para indicar si es de mañana, tarde o noche 

#input muestra el texto en pantalla, espera que el usuario introduzca algo y le de a enter, lo que el usuario escribe se guarda como string
#como hemos recibido un string usamos int para convertirlo a un número entero
#guardamos todo en la variable hora
hora = int(input("Introduce la hora (0-23): "))

if 6 <= hora < 12:
    print("Es de mañana")
else:
    if 12 <= hora < 20:
        print("Es de tarde")
    else:
        if (20 <= hora <= 23) or (0 <= hora < 6):
            print("Es de noche")
        else:
            print("La hora introducida no es válida.")
