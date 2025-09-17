const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    moviesShowing: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
    // moviesShowing será un array de referencias a películas que se proyectan
  },
  {
    timestamps: true,
  }
);

const Cinema = mongoose.model('Cinema', cinemaSchema);
module.exports = Cinema;
