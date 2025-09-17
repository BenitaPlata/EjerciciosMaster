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

/*Importa el módulo Express
const express = require('express');

const { connect } = require('./utils/db');
connect(); // Conecta con MongoDB

const Character = require('./models/Character'); //Importar el modelo character



// Define el puerto
const PORT = 3000;

// Crea la instancia del servidor Express
const server = express();

// Crea un router para definir rutas separadamente
const router = express.Router();*/

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


/*Obtener un personaje por su ID
router.get('/characters', (req, res) => {
    return Character.find()
    .then(characters => {
        // Si encontramos los personajes, los devolveremos al usuario
        return res.status(200).json(characters);
    })
    .catch(err => {
        // Si hay un error, enviaremos por ahora una respuesta de error.
        return res.status(500).json(err);
    });
});*/

// (ES IGUAL QUE EL ANTERIOR PERO MÁS CLARO Y LEGIBLE)NUEVO Endpoint con async/await para obtener todos los personajes
router.get('/characters', async (req, res) => {
  try {
    const characters = await Character.find(); // Espera a que termine la consulta
    return res.status(200).json(characters);   // Devuelve los personajes encontrados
  } catch (err) {
    return res.status(500).json(err);          // Si falla, devuelve error
  }
});

// Endpoint para obtener un personaje por id
router.get('/characters/:id', async (req, res) => {
  const id = req.params.id; // capturamos el id (valor) de lo que ponga en la URL

  try {
    const character = await Character.findById(id); // buscamos en Mongo (en mi colección)
    if (character) {
      return res.status(200).json(character); // si lo encuentra, lo devuelve
    } else {
      return res.status(404).json('No character found by this id'); // si no existe, pone 404
    }
  } catch (err) {
    return res.status(500).json(err); // si hay error, 500
  }
});


//BUSCAMOS personaje por su alias
router.get('/characters/alias/:alias', async (req, res) => {
	const {alias} = req.params;

	try {
		const characterByAlias = await Character.find({ alias: alias });
		return res.status(200).json(characterByAlias);
	} catch (err) {
		return res.status(500).json(err);
	}
});


//BUSCAMOS personajes por su edad
 router.get('/characters/age/:age', async (req, res) => {
	const {age} = req.params;

	try {
		const characterByAge = await Character.find({ age: { $gt:age } }); //greater than (encontramos valores más altos que el usado)
		return res.status(200).json(characterByAge);
	} catch (err) {
		return res.status(500).json(err);
	}
});


/*Al igual que hemos usado $gt tenemos a nuestra disposiciones otros condicionales

Si usamos $lt (less than) encontraremos valores menores al que usemos.
Si usamos $lte (less than equal) encontraremos valores menores o igual al usado.
Si usamos $gt (greater than) encontraremos los valores mayores al usado.
Si usamos $gte (greater than equal) encontraremos los valores mayores e iguales al usado. */


//Realizamos los requires
const express = require('express');
const {connect} = require('./utils/db')
const Character = require('./models/Character');
const characterRoutes = require('./routes/character.routes')

connect(); // Llamamos a la función connect que conecta con MongoDB
const PORT = 3000;
const server = express();
const router = express.Router();

server.use('/characters', characterRoutes);

//Manejador de rutas no especificadas
server.use((req, res, next) => {
	const error = new Error('Route not found'); 
	error.status = 404;
	next(error); 
  });

//Manejador de errores
server.use((error, req, res, next) => {
	return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

server.listen(PORT, () => {
  console.log(`Server running in <http://localhost>:${PORT}`);
});

// Monta el router en el servidor
server.use('/', router);

// Inicia el servidor
server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});


server.use(express.json());
server.use(express.urlencoded({ extended: false }));