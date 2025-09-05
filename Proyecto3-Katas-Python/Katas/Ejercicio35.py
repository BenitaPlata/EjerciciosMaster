'''
Crea la clase UsuarioBanco
- Representa a un usuario de un banco con su nombre, saldo y si tiene o no cuenta corriente.
    - Métodos: retirar_dinero, transferir_dinero, agregar_dinero.
    - Código a seguir:
        -Inicializar un usuario con nombre, saldo y un indicador (True o False) de cuenta corriente.
        -Implementar retirar_dinero para sustraer dinero del saldo, lanzando un error si no es posible.
        -Implementar transferir_dinero para transferir dinero desde otro usuario, lanzando un error en caso de fallo.
        -Implementar agregar_dinero para aumentar el saldo del usuario.
- Caso de uso:
        a. Crear dos usuarios: "Abril" con saldo inicial de 100 y "Enzo" con saldo inicial de 50, ambos con cuenta corriente.
        b. Agregar 20 unidades al saldo de Enzo.
        c. Transferir 80 unidades de Enzo a Abril.
        d. Retirar 50 unidades del saldo de Abril.'''


'''
#LÓGICA:
1. Creamos la clase UsuarioBanco con 3 atributos:

    - nombre → nombre del usuario.

    - saldo → cuánto dinero tiene.

    - cuenta_corriente → si tiene o no cuenta corriente (True o False).

2. Métodos:

    - agregar_dinero(cantidad) → suma al saldo.

    - retirar_dinero(cantidad) → resta del saldo si hay suficiente.

    - transferir_dinero(cantidad, otro_usuario) → transfiere dinero a otro     usuario si hay suficiente.'''


# PASO 1: definir la clase UsuarioBanco
class UsuarioBanco:
    def __init__(self, nombre, saldo, cuenta_corriente): #constructor y stributos
        self.nombre = nombre
        self.saldo = saldo
        self.cuenta_corriente = cuenta_corriente

# PASO 2: definimos los métodos

    def retirar_dinero(self, cantidad):
        #el programa se interrumpe si salta la excepción, si no, continúa
        if cantidad > self.saldo:
            raise Exception(f"{self.nombre} no tiene saldo para retirar {cantidad}.")
        self.saldo -= cantidad
        print(f"{cantidad} retirado correctamente. Saldo actual de {self.nombre}: {self.saldo}")

    def agregar_dinero(self, cantidad):
        self.saldo += cantidad
        print(f"{cantidad} ingresado correctamente. Saldo actual de {self.nombre}: {self.saldo}")  

    def transferir_dinero(self, cantidad, otro_usuario):
        if cantidad > self.saldo:
            raise Exception(f"{self.nombre} no tiene suficiente saldo para transferir {cantidad}.")
        self.saldo -= cantidad
        otro_usuario.saldo += cantidad
        print(f"{cantidad} transferida correctamente. Saldo actual de {self.nombre}: {self.saldo}")


# PASO 3: CASO DE USO

# a. Creo dos usuarios
abril = UsuarioBanco("Abril", 100, True)
Enzo = UsuarioBanco("Enzo", 50, True)

# b. Agregar 20 al saldo de Enzo
Enzo.agregar_dinero(20)  # saldo de Enzo ahora es 70

# c. Transferir 80 unidades de Enzo a Abril (esto fallará porque Enzo tiene 70)
try:
    Enzo.transferir_dinero(80, abril)
except Exception as e:
    print("Error:", e)

# Para que funcione la transferencia, primero damos más dinero a Enzo
Enzo.agregar_dinero(10)  # saldo de Enzo ahora es 80
Enzo.transferir_dinero(80, abril)  # ahora sí se transfiere

# d. Retirar 50 del saldo de Abril
abril.retirar_dinero(50)

# Mostrar los saldos finales
print(f"Saldo Abril: {abril.saldo}")
print(f"Saldo Enzo: {Enzo.saldo}")
