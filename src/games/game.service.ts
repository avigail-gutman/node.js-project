import Game from './game.model';
import { BullPgiaGame } from './game.logic';

//יצירת משחק חדש
export async function createGame(playerId: string) {
  const logic = new BullPgiaGame();
  const secretCode = logic.secretCode;
  const game = new Game({
    playerId,
    secretCode,
    attempts: [],
    status: 'in-progress',
    maxAttempts: 10,
    winner: false
  });
  await game.save();
  return game;
}

// שליחת ניחוש למשחק
export async function makeGuess(gameId: string, guess: number[]) {
  const game = await Game.findById(gameId);
  if (!game) throw new Error('Game not found');
  const logic = new BullPgiaGame();
  logic.secretCode = game.secretCode;
  const { bulls, pgias } = logic.checkGuess(guess);

  game.attempts.push({ guess, bulls, pgias, createdAt: new Date() });

  if (bulls === 4) {
    game.status = 'won';
    game.winner = true;
  } else if (game.attempts.length >= game.maxAttempts) {
    game.status = 'lost';
  }

  await game.save();
  return { bulls, pgias, status: game.status, remainingAttempts: game.maxAttempts - game.attempts.length };
}


// שליפת סטטוס משחק והיסטוריית ניחושים
export async function getGameStatus(gameId: string) {
  const game = await Game.findById(gameId);
  if (!game) throw new Error('Game not found');
  return {
    status: game.status,
    attempts: game.attempts,
    maxAttempts: game.maxAttempts,
    winner: game.winner,
    createdAt: game.createdAt
  };
}

// סיום משחק (למשל ויתור)
export async function endGame(gameId: string) {
  const game = await Game.findById(gameId);
  if (!game) throw new Error('Game not found');
  game.status = 'ended';
  await game.save();
  return { message: 'Game ended successfully' };
}

// שליפת כל המשחקים של שחקן מסוים
export async function getGamesByPlayer(playerId: string) {
  return await Game.find({ playerId });
}