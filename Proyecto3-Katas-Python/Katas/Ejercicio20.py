'''Para una lista con elementos de tipo integer y string, obtén una nueva lista solo con los valores int. Usa la función filter().'''

# PASO1: Lista de ejemplo
mezcla = [1, "a", 2, "hola", 3, "5", 4]

# PASO2: Filtrar solo los enteros usando filter y lambda
#lambda x: isinstance(x, int) → función anónima que devuelve True solo para enteros.
#filter(lambda x: ..., mezcla) → recorre la lista mezcla y mantiene solo los elementos que cumplan la condición.
#list(...) → convierte el resultado de filter (un iterador) en una lista normal.

solo_enteros = list(filter(lambda x: isinstance(x, int), mezcla))

# PASO3: Mostrar resultado
print(solo_enteros)
