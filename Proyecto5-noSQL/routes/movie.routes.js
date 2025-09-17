// routes/movie.routes.js
const express = require('express');
const Movie = require('../models/Movie');

const router = express.Router();

// GET todas las películas
router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
});

// GET película por ID
router.get('/id/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (movie) {
      return res.status(200).json(movie);
    } else {
      return res.status(404).json('No movie found by this id');
    }
  } catch (error) {
    next(error);
  }
});

// GET película por título
router.get('/title/:title', async (req, res, next) => {
  const { title } = req.params;
  try {
    const movieByTitle = await Movie.find({ title });
    return res.status(200).json(movieByTitle);
  } catch (error) {
    next(error);
  }
});

// GET películas por género
router.get('/genre/:genre', async (req, res, next) => {
  const { genre } = req.params;
  try {
    const movieByGenre = await Movie.find({ genre });
    return res.status(200).json(movieByGenre);
  } catch (error) {
    next(error);
  }
});

// GET películas a partir de 2010
router.get('/year/:year', async (req, res, next) => {
  const { year } = req.params;
  try {
    const movieByYear = await Movie.find({ year: { $gt: year } });
    return res.status(200).json(movieByYear);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
