import express from 'express';
import * as playerService from './player.service';
import { validatePlayer } from '../middleware/validateParameters';

const router = express.Router();

// הוספת שחקן
router.post('/add', validatePlayer, async (req, res) => {
    try {
    const player = await playerService.addPlayer(req.body);
    res.status(201).json(player);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

// עריכת שחקן
router.put('/:playerId', validatePlayer, async (req, res) => {
    try {
    const player = await playerService.editPlayer(req.params.playerId, req.body);
    res.json(player);
  } catch (err) {
    res.status(404).json({ error: (err as Error).message });
  }
});

// מחיקת שחקן
router.delete('/:playerId', async (req, res) => {
  try {
    const result = await playerService.deletePlayer(req.params.playerId);
    res.json(result);
  } catch (err) {
    res.status(404).json({ error: (err as Error).message });
  }
});

// דירוג
router.get('/leaderboard', async (req, res) => {
  const leaderboard = await playerService.getLeaderboard();
  res.json(leaderboard);
});

router.get('/:playerId/recent', async (req, res) => {
  try {
    const results = await playerService.getRecentResults(req.params.playerId);
    res.json(results);
  } catch (err) {
    res.status(404).json({ error: (err as Error).message });
  }
});


// שליפת שחקן
router.get('/:playerId', async (req, res) => {
  try {
    const player = await playerService.getPlayer(req.params.playerId);
    res.json(player);
  } catch (err) {
    res.status(404).json({ error: (err as Error).message });
  }
});

export default router;