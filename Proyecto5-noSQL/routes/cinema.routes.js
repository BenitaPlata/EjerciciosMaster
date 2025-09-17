const express = require('express');
const Cinema = require('../models/Cinema');

const router = express.Router();

// GET todos los cines
router.get('/', async (req, res, next) => {
  try {
    const cinemas = await Cinema.find().populate('moviesShowing'); // Trae los cines con las películas que muestran
    return res.status(200).json(cinemas);
  } catch (error) {
    next(error);
  }
});

// GET cine por ID
router.get('/id/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const cinema = await Cinema.findById(id).populate('moviesShowing');
    if (cinema) {
      return res.status(200).json(cinema);
    } else {
      return res.status(404).json('No cinema found by this ID');
    }
  } catch (error) {
    next(error);
  }
});

// POST crear un nuevo cine
router.post('/create', async (req, res, next) => {
  try {
    const newCinema = new Cinema(req.body);
    const createdCinema = await newCinema.save();
    return res.status(201).json(createdCinema);
  } catch (error) {
    next(error);
  }
});

// PUT actualizar cine por ID
router.put('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedCinema = await Cinema.findByIdAndUpdate(id, req.body, { new: true });
    if (updatedCinema) {
      return res.status(200).json(updatedCinema);
    } else {
      return res.status(404).json('No cinema found to update');
    }
  } catch (error) {
    next(error);
  }
});

// DELETE eliminar cine por ID
router.delete('/delete/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedCinema = await Cinema.findByIdAndDelete(id);
    if (deletedCinema) {
      return res.status(200).json('Cinema deleted successfully');
    } else {
      return res.status(404).json('No cinema found to delete');
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
