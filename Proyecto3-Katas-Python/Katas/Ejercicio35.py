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
        a. Crear dos usuarios: "Alicia" con saldo inicial de 100 y "Bob" con saldo inicial de 50, ambos con cuenta corriente.
        b. Agregar 20 unidades al saldo de Bob.
        c. Transferir 80 unidades de Bob a Alicia.
        d. Retirar 50 unidades del saldo de Alicia.'''