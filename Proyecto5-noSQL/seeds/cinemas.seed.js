// seeds/cinemas.seed.js
const mongoose = require('mongoose');
const Cinema = require('../models/Cinema');

const cinemas = [
  { name: 'Cinepolis', location: 'Madrid', capacity: 250 },
  { name: 'Yelmo Cines', location: 'Barcelona', capacity: 300 },
  { name: 'Cinesa', location: 'Valencia', capacity: 200 },
];

const cinemaDocuments = cinemas.map(cinema => new Cinema(cinema));

mongoose
  .connect('mongodb://localhost:27017/proyecto-basico-express-movies', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCinemas = await Cinema.find();
    if (allCinemas.length) {
      await Cinema.collection.drop();
    }
  })
  .catch(err => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Cinema.insertMany(cinemaDocuments);
    console.log('Cinemas database created');
  })
  .catch(err => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());
