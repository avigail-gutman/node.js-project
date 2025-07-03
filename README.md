# Bull & Pgia Game API

מערכת API למשחק בול פגיעה (Bull & Pgia) מול המחשב, מבוססת Node.js, Express, TypeScript ו־MongoDB.

## תכונות עיקריות
- ניהול שחקנים (הוספה, עריכה, מחיקה, הצגה, דירוג)
- יצירת משחקים, שליחת ניחושים, סטטוס, סיום משחק
- שמירת כל הנתונים במסד MongoDB
- בדיקות תקינות (middlewares) לכל קלט
- קובץ Postman לבדיקה קלה של כל ה־API

## מבנה תיקיות
```
src/
│   app.ts
│   server.ts
├── db/
│   └── connection.ts
├── games/
│   ├── game.controller.ts
│   ├── game.service.ts
│   ├── game.model.ts
│   └── game.logic.ts
├── players/
│   ├── player.controller.ts
│   ├── player.service.ts
│   └── player.model.ts
└── middleware/
    ├── validateGame.ts
    └── validateParameters.ts
```

## התקנה והרצה

1. התקנת תלויות:
   ```sh
   npm install
   ```

2. ודאו ש־MongoDB מותקן ורץ על המחשב (`mongodb://127.0.0.1:27017`).

3. הרצת השרת:
   ```sh
   npm start
   ```
   או
   ```sh
   npx ts-node src/server.ts
   ```

4. ה־API יאזין בכתובת:  
   ```
   http://localhost:3000
   ```

## בדיקות API

- השתמשו בקובץ ה־Postman המצורף (`avigail-ruti.postman_collection.json`).
- ייבאו אותו ל־Postman ובדקו את כל הבקשות לפי הסדר.

## משתני סביבה (אופציונלי)

ניתן להגדיר קובץ `.env` עם משתנה:
```
MONGO_URI=mongodb://127.0.0.1:27017/bull-pgia-game
```

## קרדיטים

- אביגיל גוטמן
- רותי כהן

---