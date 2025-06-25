export class BullPgiaGame {
  secretCode: number[];

  constructor() {
    this.secretCode = this.createSecretCode();
  }

  // יצירת קוד סודי רנדומלי (4 ספרות שונות בין 1 ל-9)
  createSecretCode(): number[] {
    const digits: number[] = [];
    while (digits.length < 4) {
      const rand = Math.floor(Math.random() * 9) + 1; // מספר בין 1 ל-9
      if (!digits.includes(rand)) {
        digits.push(rand);
      }
    }
    return digits;
  }

  // בדיקת ניחוש: מחזירה כמה Bulls וכמה Pgias
  checkGuess(guess: number[]): { bulls: number; pgias: number } {
    let bulls = 0;
    let pgias = 0;
    for (let i = 0; i < 4; i++) {
      if (guess[i] === this.secretCode[i]) {
        bulls++;
      } else if (this.secretCode.includes(guess[i])) {
        pgias++;
      }
    }
    return { bulls, pgias };
  }
}