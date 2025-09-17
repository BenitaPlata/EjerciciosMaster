// index.js
const express = require('express');
const { connect } = require('./utils/db');
const movieRoutes = require('./routes/movie.routes');
const cinemaRoutes = require('./routes/cinema.routes'); // Nueva línea para cines

connect(); // Conecta con MongoDB

const PORT = 3000;
const server = express();

// Middleware para recibir JSON en el body
server.use(express.json());

// Montamos las rutas de películas en /movies
server.use('/movies', movieRoutes);

// Montamos las rutas de cines en /cinemas
server.use('/cinemas', cinemaRoutes);

// Manejo de rutas no encontradas
server.use((req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

// Manejo de errores
server.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

// Inicia el servidor
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
