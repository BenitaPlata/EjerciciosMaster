/*importa librería express para poder usar funcionalidades
const express = require('express');

const PORT = 3000;
const server = express(); //crea una instancia de la aplicación Express

//Esta línea le dice a express que para cualquier petición que empiece por /, ejecute esa función
server.use('/', (req, res) => {
  res.send('Hello Students!'); //envía ese mensaje al navegador
});

//arranca el servidor en el puerto 3000 y muestra un mensaje indicando que el servidor está listo
server.listen(PORT, () => {
  console.log(`Server running in <http://localhost>:${PORT}`);
});

//debería responder a /movies pero como primero tengo /  Y NO LE ESTAMOS INDICANDO QUE DEBE CAMBIAR A OTRA RUTA SE QUEDA AHÍ. AHORA LO HAREMOS DE LA FORMA CORRECTA
server.use('/movies', (req, res) => {
	const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
  res.send(movies);
});*/
////////////////////////////////////////////////////////////

// Importa el módulo Express
const express = require('express');

const { connect } = require('./utils/db');
connect(); // Conecta con MongoDB

const Character = require('./models/Character'); //Importar el modelo character



// Define el puerto
const PORT = 3000;

// Crea la instancia del servidor Express
const server = express();

// Crea un router para definir rutas separadamente
const router = express.Router();

// Ruta raíz: responde con un saludo
router.get('/', (req, res) => {
  res.send('Hello Prometeo!');
});

// Ruta /movies/:movie
// http://localhost:3000/movies/Titanic
router.get('/movies/:movie', (req, res) => {
  const nameMovie = req.params.movie; // Obtiene el valor de la película de la URL
  const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
  const findMovieIndex = movies.indexOf(nameMovie); // Busca la película en el array
  if (findMovieIndex === -1) {
    return res.send('No se ha encontrado la película'); // Si no coincide, devuelve mensaje
  }
  res.send(movies[findMovieIndex]); // Devuelve la película encontrada
});

// Ruta /query
// http://localhost:3000/query?nombre=paco&apellido=pepe
router.get('/query', (req, res) => {
  const nombre = req.query.nombre;
  const apellido = req.query.apellido;
  res.send("¡Hola Mundo! os saluda => " + nombre + " " + apellido + " desde GET 2, con Query params");
});


// NUEVO Endpoint para obtener todos los personajes
router.get('/characters', (req, res) => {
  Character.find()
    .then(characters => res.status(200).json(characters))
    .catch(err => res.status(500).json(err));
});



// Monta el router en el servidor
server.use('/', router);

// Inicia el servidor
server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
