--Ejercicio 1: “Escribe una consulta que recupere los Vuelos (flights) y su identificador que figuren con status On Time.”--
-- 1. Vuelos con status 'On Time'
SELECT flight_id, status
FROM bookings.flights
WHERE status = 'On Time';



--Ejercicio 2. Escribe una consulta que extraiga todas las columnas de la tabla bookings y refleje todas las reservas que han supuesto una cantidad total mayor a 1.000.000 (Unidades monetarias).
--Nota: las tablas son públicas de Rusia, por tanto son Rublos sus unidades monetarias--
SELECT *
FROM bookings.bookings
WHERE total_amount > 1000000;



--Ejercicio 3. Escribe una consulta que extraiga todas las columnas de los datos de los modelos de aviones disponibles (aircraft_data).--
-- 3. Extraer todas las columnas de los modelos de aviones disponibles
SELECT *
FROM bookings.aircrafts_data;



--Ejercicio 4. Con el resultado anterior visualizado previamente, escribe una consulta que extraiga los identificadores de vuelo que han volado con un Boeing 737. (Código Modelo Avión = 733)--
-- 4. Identificadores de vuelo que han volado con un Boeing 737
SELECT flight_id
FROM bookings.flights
WHERE aircraft_code = '733';



--Ejercicio 5. Escribe una consulta que te muestre la información detallada de los tickets que han comprado las personas que se llaman Irina.
-- 5. Tickets comprados por personas llamadas Irina
SELECT *
FROM bookings.tickets
WHERE passenger_name ILIKE 'Irina%';



--Ejercicio 6. Mostrar las ciudades con más de un aeropuerto.--
SELECT city, COUNT(*) AS num_airports -- selecciona la columna que tiene el nombre de la ciudad de cada aeropuerto. Cuenta cuantas filas (aeropuertos) hay por cada ciudad y pon de alias num_airports para que la columna se vea con ese nombre
FROM bookings.airports -- indica la tabla de la que se van a tomar los datos: airports dentro de bookings
GROUP BY city -- agrupa por ciudad, osea que count* es para ciudad no para toda la tabla
HAVING COUNT(*) > 1; --se filtran los grupos que tienen más de un aeropuerto



--Ejercicio 7. Mostrar el número de vuelos por modelo de avión.--
SELECT aircraft_code, COUNT(*) AS num_flights --contamos vuelos por cada modelo de avión
FROM bookings.flights -- tabla de vuelos
GROUP BY aircraft_code -- agrupamos por modelo de avión
ORDER BY num_flights DESC; -- ponemos esto para ver primero modelos con más vuelos



--Ejercicio 8. Reservas con más de un billete (varios pasajeros).
SELECT booking_id, COUNT(*) AS num_tickets --muestra el identificador de cada reserva, cuenta cuántos tickets están asociados a esa reserva y dale un nombre a la columna que sea más fácil de leer
FROM bookings.tickets -- indica la tabla de dónde sacamos los datos
GROUP BY booking_id -- agrupa todos los tickets por reserva
HAVING COUNT(*) > 1; --filtra los grupos, vemos las reservas que tienen más de un ticket, osea varias personas en la misma reserva



--9. Vuelos con retraso de salida superior a una hora.
SELECT flight_id, scheduled_departure, actual_departure,
       actual_departure - scheduled_departure AS delay -- flight_id muestra el identificador de cada vuelo, después hora de salida programada, hora actual de salida y calcula la diferencia y muestralo como delay
FROM bookings.flights -- indica que los datos vienen de la tabla flights dntro de bookings
WHERE actual_departure - scheduled_departure > INTERVAL '1 hour'; -- filtra solo los vuelos con  retraso superior a 1 hora

