//DEFINIMOS COMO SERÁ CADA DOCUMENTO DE PELICULA EN NUESTRA BBDD

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number },
    genre: { type: String, required: true },
  },
  {
    timestamps: true, // Esto guarda createdAt y updatedAt
  }
);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
