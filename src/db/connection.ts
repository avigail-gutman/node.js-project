import mongoose from 'mongoose';

// const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bull-pgia-game';
const MONGO_URI = 'mongodb://127.0.0.1:27017/bull-pgia-game';

export async function connectToDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // עוצר את התהליך אם יש שגיאה
  }
}