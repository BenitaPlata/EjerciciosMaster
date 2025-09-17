const mongoose = require('mongoose');

const urlDb = 'mongodb://localhost:27017/proyecto5-noSQL'; // Nombre de nuestra base de datos

const connect = async () => {
  try {
    await mongoose.connect(urlDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to DB successfully!');
  } catch (error) {
    console.log('Error connecting to DB:', error);
  }
};

module.exports = { connect };
