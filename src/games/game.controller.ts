import express from 'express';
import * as gameService from './game.service';
import { validateGuess } from '../middleware/validateGame';

const router = express.Router();

// יצירת משחק חדש
router.post('/start', async (req, res) => {
  try {
    const game = await gameService.createGame(req.body.playerId);
    res.status(201).json(game);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

// שליחת ניחוש
router.post('/:gameId/guess', validateGuess, async (req, res) => {
    try {
    const result = await gameService.makeGuess(req.params.gameId, req.body.guess);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

// סטטוס משחק
router.get('/:gameId', async (req, res) => {
  try {
    const game = await gameService.getGameStatus(req.params.gameId);
    res.json(game);
  } catch (err) {
    res.status(404).json({ error: (err as Error).message });
  }
});

// סיום משחק
router.post('/:gameId/end', async (req, res) => {
  try {
    const result = await gameService.endGame(req.params.gameId);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

export default router;