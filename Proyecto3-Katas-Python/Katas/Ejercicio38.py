'''Escribe un programa que determine qué calificación en texto tiene un alumno según su calificación numérica.
Reglas:
        0 - 69: insuficiente
        70 - 79: bien
        80 - 89: muy bien
        90 - 100: excelente'''

# LÓGICA:
'''Pedir al usuario su calificación numérica (0/100).
Según el rango en que caiga la nota, mostrar un texto:
0/69 → insuficiente
70/79 → bien
80/89 → muy bien
90/100 → excelente'''

# Paso 1: pedir la nota al usuario
nota = int(input("Introduce tu calificación (0-100): "))

# Paso 2: evaluar la nota con condiciones
if 0 <= nota <= 69:
    print("Insuficiente")
elif 70 <= nota <= 79:
    print("Bien")
elif 80 <= nota <= 89:
    print("Muy bien")
elif 90 <= nota <= 100:
    print("Excelente")
else:
    print("Nota fuera de rango (0-100)")

