const mongoose = require("mongoose");

const urlDb = "mongodb://localhost:27017/casa-de-papel"; // Cambia a tu DB

const connect = async () => {
  try {
    await mongoose.connect(urlDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected with db successfully");
  } catch (error) {
    console.log("Error connecting to db:", error);
  }
};

module.exports = {
  connect,
};
