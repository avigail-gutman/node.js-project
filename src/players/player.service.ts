import Player from './player.model';
import Game from '../games/game.model';

// הוספת שחקן חדש
export async function addPlayer(data: { name: string; password: string; mail: string }) {
  const player = new Player({
    ...data,
    totalGames: 0,
    wins: 0
  });
  await player.save();
  return player;
}

// עריכת שחקן קיים
export async function editPlayer(id: string, data: { name?: string; password?: string; mail?: string }) {
  const player = await Player.findByIdAndUpdate(id, data, { new: true });
  if (!player) throw new Error('Player not found');
  return player;
}

// מחיקת שחקן
export async function deletePlayer(id: string) {
  const player = await Player.findByIdAndDelete(id);
  if (!player) throw new Error('Player not found');
  return { message: 'Player deleted successfully' };
}

// שליפת שחקן לפי מזהה
export async function getPlayer(id: string) {
  const player = await Player.findById(id);
  if (!player) throw new Error('Player not found');
  return player;
}

  // מחזיר את 10 המשחקים האחרונים של השחקן, ממוינים לפי תאריך
export async function getRecentResults(playerId: string) {
  return await Game.find({ playerId }).sort({ createdAt: -1 }).limit(10);
}

// שליפת דירוג (10 השחקנים עם הכי הרבה ניצחונות)
export async function getLeaderboard() {
  return await Player.find().sort({ wins: -1 }).limit(10);
}