const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const movies = [
  { title: 'The Matrix', director: 'Hermanas Wachowski', year: 1999, genre: 'Acción' },
  { title: 'The Matrix Reloaded', director: 'Hermanas Wachowski', year: 2003, genre: 'Acción' },
  { title: 'Buscando a Nemo', director: 'Andrew Stanton', year: 2003, genre: 'Animación' },
  { title: 'Buscando a Dory', director: 'Andrew Stanton', year: 2016, genre: 'Animación' },
  { title: 'Interestelar', director: 'Christopher Nolan', year: 2014, genre: 'Ciencia ficción' },
  { title: '50 primeras citas', director: 'Peter Segal', year: 2004, genre: 'Comedia romántica' },
];

const movieDocuments = movies.map(movie => new Movie(movie));

mongoose
  .connect('mongodb://localhost:27017/proyecto5-noSQL', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allMovies = await Movie.find();
    if (allMovies.length) {
      await Movie.collection.drop(); // Limpia la colección si ya existía
    }
  })
  .catch(err => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Movie.insertMany(movieDocuments); // Inserta los nuevos datos
    console.log('Database created successfully!');
  })
  .catch(err => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());
