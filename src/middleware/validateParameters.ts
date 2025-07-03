import { Request, Response, NextFunction } from 'express';

export function validatePlayer(req: Request, res: Response, next: NextFunction) {
  const { name, password, mail } = req.body;

  // בדיקה שכל השדות קיימים
  if (!name || !password || !mail) {
    return res.status(400).json({ error: 'Name, password and mail are required.' });
  }

  // בדיקה שהשם הוא מחרוזת
  if (typeof name !== 'string' || name.length < 2) {
    return res.status(400).json({ error: 'Name must be at least 2 characters.' });
  }

  // בדיקה שהסיסמה היא מחרוזת באורך 4 לפחות
  if (typeof password !== 'string' || password.length < 4) {
    return res.status(400).json({ error: 'Password must be at least 4 characters.' });
  }

  // בדיקה שהמייל תקין (בדיקה בסיסית)
  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof mail !== 'string' || !mailRegex.test(mail)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  next();
}