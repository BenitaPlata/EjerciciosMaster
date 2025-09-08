'''Escribe un programa en Python que utilice condicionales para determinar el monto final de una compra en una tienda en línea, después de aplicar un descuento. El programa debe:
    a. Solicitar al usuario el precio original de un artículo.
    b. Preguntar si tiene un cupón de descuento (respuesta sí o no).
    c. Si la respuesta es sí, solicitar el valor del cupón de descuento.
    d. Aplicar el descuento al precio original, siempre que el valor del cupón sea válido (mayor a cero).
    e. Mostrar el precio final de la compra, considerando o no el descuento.
    f. Usar estructuras de control de flujo (if, elif, else) para llevar a cabo las acciones.'''

#LÓGICA:
'''
1. Pedimos al usuario el precio original del artículo.

2. Preguntamos si tiene un cupón de descuento.

3. Si tiene cupón (sí), pedimos el valor del cupón.

4. Verificamos que el cupón sea mayor que 0.

5. Calculamos el precio final restando el descuento, o dejamos el precio original si no hay cupón.

6. Mostramos el precio final.'''

# Paso 1: pedir el precio original
precio_original = float(input("Introduce el precio del artículo: "))

# Paso 2: preguntar si tiene cupón
tiene_cupon = input("¿Tienes un cupón de descuento? (sí/no): ").lower()

# Paso 3: inicializamos el precio final como el precio original
precio_final = precio_original

# Paso 4: evaluar según la respuesta del usuario
if tiene_cupon == "sí":
    # si tiene cupón, pedimos el valor
    cupon = float(input("Introduce el valor del cupón: "))
    
    if cupon > 0:
        # aplicamos el descuento
        precio_final -= cupon
        print(f"Se aplicó un descuento de {cupon}.")
    else:
        print("El valor del cupón no es válido. No se aplica descuento.")
elif tiene_cupon == "no":
    # no tiene cupón
    print("No se aplicará ningún descuento.")
else:
    # respuesta no válida
    print("Respuesta no válida. No se aplicará descuento.")

# Paso 5: mostrar el precio final
print(f"El precio final de la compra es: {precio_final}")
