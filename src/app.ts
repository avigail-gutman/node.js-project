import express from 'express';
import playerController from './players/player.controller';
import gameController from './games/game.controller';
import { Request, Response, NextFunction } from 'express';



const app = express();

app.use(express.json());

app.use('/api/players', playerController);
app.use('/api/games', gameController);

// טיפול בשגיאות גלובלי
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});
export default app;