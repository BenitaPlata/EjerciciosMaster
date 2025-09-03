'''Crea la clase Arbol
- Define un árbol genérico con un tronco y ramas como atributos.
- Métodos disponibles: crecer_tronco, nueva_rama, crecer_ramas, quitar_rama, info_arbol.
- Código a seguir:
    -Inicializar un árbol con un tronco de longitud 1 y una lista vacía de ramas.
    -Implementar el método crecer_tronco para aumentar la longitud del tronco en una unidad.
    -Implementar el método nueva_rama para agregar una nueva rama de longitud 1 a la lista de ramas.
    -Implementar el método crecer_ramas para aumentar en una unidad la longitud de todas las ramas existentes.
    -Implementar el método quitar_rama para eliminar una rama en una posición específica.
    -Implementar el método info_arbol para devolver información sobre la longitud del tronco, el número de ramas y sus longitudes.
- Caso de uso:
        a. Crear un árbol.
        b. Hacer crecer el tronco una unidad.
        c. Añadir una nueva rama.
        d. Hacer crecer todas las ramas una unidad.
        e. Añadir dos nuevas ramas.
        f. Retirar la rama situada en la posición 2.
        g. Obtener información sobre el árbol.'''

# LÓGICA
'''
- Queremos crear una clase Arbol con los siguientes atributos:

    - tronco → longitud del tronco (inicial 1).

    - ramas → lista con las longitudes de las ramas (inicial vacía).

- La clase tendrá los métodos:

    - crecer_tronco() → aumenta tronco en 1.

    - nueva_rama() → agrega una nueva rama de longitud 1 a ramas.

    - crecer_ramas() → aumenta todas las ramas existentes en 1.

    - quitar_rama(pos) → elimina la rama en la posición pos (índice).

    - info_arbol() → devuelve información del tronco y las ramas.'''

# Paso 1: Definir la clase Arbol con sus atributos y métodos
class arbol:
    def __init__(self): # CONSTRUCTOR (se ejecuta automaticamente al crear el arbol)inicializa el tronco y las ramos. Con self hacemos referencia al propio objeto, osea árbol
        self.tronco = 1 # es el tronco de este árbol, que es un atributo. Inicializa la longitud del tronco a 1
        self.ramas = [] # inicializa la lista de ramas como vacía

    def crecer_tronco(self): #  Método que cada vez que se llama suma 1 a tronco
        self.tronco += 1

    def nueva_rama(self): # Método que agrega una nueva rama de longitud 1 a la lista de ramas de este árbol
        self.ramas.append(1) # añade un elemento al final de la lista ramas

    def crecer_ramas(self): # Método que recorre la lista y suma 1 de longitud en todas las ramas existentes y se asignan a self.ramas
        self.ramas = [rama + 1 for rama in self.ramas]

    def quitar_rama(self, pos): # Método que elimina la rama en el índice pos si es válido
        if 0 <= pos < len(self.ramas):
            self.ramas.pop(pos)
        else:
            print("Posición inválida")

    def info_arbol(self): # Método que devuelve un resumen del árbol (longitud del tronco, número de ramas y lista con las longitudes de cada rama)
        return f"Tronco: {self.tronco}, Número de ramas: {len(self.ramas)}, Longitudes de ramas: {self.ramas}"
    
    
    # Aplicamos los casos de uso:

    # 1. Crerar un árbol
    arbol = arbol()  #  Creado árbol con tronco = 1 y sin ramas (como el constructor)

    # 2. Hacer crecer el tronco una unidad. Llamo al método crecer_tronco que suma 1 
    arbol.crecer_tronco()  # tronco ahora es 2

    # 3. Añadir una nueva rama. Llamo al método y se añade una rama de longitud 1, tal y como ese método establece
    arbol.nueva_rama()

    # 4. Hacer crecer todas las ramas una unidad
    arbol.crecer_ramas()  # ramas = [2]

    # 5. Añadir dos nuevas ramas
    arbol.nueva_rama()  # ramas = [2, 1]
    arbol.nueva_rama()  # ramas = [2, 1, 1]

    # 6. Retirar la rama situada en la posición 2
    arbol.quitar_rama(2)  # ramas = [2, 1]

    # 7. Obtener información sobre el árbol
    print(arbol.info_arbol())
 


