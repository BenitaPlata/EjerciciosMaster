'''Escribe un programa en Python que cree una lista de diccionarios con información de estudiantes (nombre, edad, calificación) y use filter para extraer a los estudiantes con una calificación mayor o igual a 90.'''

#PASO 1: CREO LISTA DE ESTUIDANTES

estudiantes = [
    {"nombre": "Ana", "edad": 20, "calificacion": 95},
    {"nombre": "Luis", "edad": 22, "calificacion": 88},
    {"nombre": "Marta", "edad": 19, "calificacion": 92},
    {"nombre": "Juan", "edad": 21, "calificacion": 85}
]


# Paso 2: Definir la condición con filter usando lambda
estudiantes_top = list(filter(lambda estudiante: estudiante["calificacion"] >= 90, estudiantes))

# Paso 3: Imprimir los estudiantes filtrados
for estudiante in estudiantes_top:
    print(estudiante["nombre"])
