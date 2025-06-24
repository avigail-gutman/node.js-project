import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  mail: { type: String, required: true },
  totalGames: { type: Number, default: 0 },
  wins: { type: Number, default: 0 }
});

export default mongoose.model('Player', playerSchema);