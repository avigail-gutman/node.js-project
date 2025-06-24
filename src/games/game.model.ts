import mongoose from 'mongoose';

const attemptSchema = new mongoose.Schema({
  guess: {
    type: [Number],
    required: true,
    validate: [(arr: number[]) => arr.length === 4, 'Guess must be 4 digits']
  },
  bulls: { type: Number, required: true },
  pgias: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const gameSchema = new mongoose.Schema({
  playerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
  secretCode: {
    type: [Number],
    required: true,
    validate: [(arr: number[]) => arr.length === 4, 'Secret code must be 4 digits']
  },
  attempts: [attemptSchema],
  status: {
    type: String,
    enum: ['in-progress', 'won', 'lost', 'ended'],
    default: 'in-progress'
  },
  maxAttempts: { type: Number, default: 10 },
  winner: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Game', gameSchema);