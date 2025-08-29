'''Escribe una función que tome una lista de nombres de mascotas como parámetro y devuelva una nueva lista excluyendo ciertas mascotas prohibidas en España. La lista de mascotas a excluir es ["Mapache", "Tigre", "Serpiente Pitón", "Cocodrilo", "Oso"]. Usa la función filter().'''

#PASO 1: DEFINO LA FUNCIÓN DE MASCOTAS PROHIBIDAS

def filtrar_mascotas(lista_mascotas):
    mascotas_prohibidas = ["Mapache", "Tigre", "Serpiente Pitón", "Cocodrilo", "Oso"]

#PASO 2: USO FILTER() PARA FILTRAR ELEMENTOS 
#lambda m: para cada mascota m, devuelve true si no está prohibida
#filter: selecciona los elementos donde la función devuelve true
#list(): convertimos el rdo en una lista normal

    mascotas_permitidas = list(filter(lambda m: m not in mascotas_prohibidas, lista_mascotas))

#PASO 3: DEVUELVO LA LISTA FILTRADA
    return mascotas_permitidas


#PRUEBO LA FUNCIÓN
mis_mascotas = ["Perro", "Gato", "Tigre", "Loro", "Oso"]
resultado = filtrar_mascotas(mis_mascotas)
print(resultado)  # Output: ['Perro', 'Gato', 'Loro']
