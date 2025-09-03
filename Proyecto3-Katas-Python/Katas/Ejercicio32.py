'''Crea una función que tome un nombre completo y una lista de empleados, busque el nombre en la lista y devuelva el puesto del empleado si se encuentra; de lo contrario, devuelve un mensaje indicando que la persona no trabaja aquí.'''

#LÓGICA: nombre completo a buscar, lista de empleados donde cada empleado puede representarse como un diccionario con nombre y puesto
#La función debe recorrer la lista, comparar el nombre buscado con el de cada empleado, si coincide devolver el puesto y si no se encuentra devolver que la persona no trabaja aquí.

# Paso 1: Crear la función para buscar el puesto de un empleado
def buscar_puesto(nombre, empleados):
    for empleado in empleados: # recorre cada diccionario en la lista
        if empleado["nombre"] == nombre: # compara el nombre del empleado con el buscado
            return empleado["puesto"]  # devuelve el puesto si se encuentra
    return "La persona no trabaja aquí"  # mensaje si no se encuentra

# Paso 2: Crear la lista de empleados
empleados = [
    {"nombre": "Ana Pérez", "puesto": "Gerente"},
    {"nombre": "Juan López", "puesto": "Desarrollador"},
    {"nombre": "María Ruiz", "puesto": "Diseñadora"}
]

# Probar la función
print(buscar_puesto("Juan López", empleados))   # debería mostrar "Desarrollador"
print(buscar_puesto("Ana Pérez", empleados))    # debería mostrar "Gerente"
print(buscar_puesto("Pedro Gómez", empleados))  # debería mostrar "La persona no trabaja aquí"
