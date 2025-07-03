import { Request, Response, NextFunction } from 'express';

export function validateGuess(req: Request, res: Response, next: NextFunction) {
  const guess = req.body.guess;

  // בדיקה שהניחוש הוא מערך של 4 ספרות
  if (!Array.isArray(guess) || guess.length !== 4) {
    return res.status(400).json({ error: 'Guess must be an array of 4 digits.' });
  }

  // בדיקה שכל הערכים הם מספרים בין 1 ל-9
  if (!guess.every((n: number) => typeof n === 'number' && n >= 1 && n <= 9)) {
    return res.status(400).json({ error: 'Each digit must be a number between 1 and 9.' });
  }

  // בדיקה שאין כפילויות
  if (new Set(guess).size !== 4) {
    return res.status(400).json({ error: 'Digits must not repeat.' });
  }

  next();
}