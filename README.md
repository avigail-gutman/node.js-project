# Bull & Pgia Game

## Overview
The Bull & Pgia game is a fun and interactive game where players try to guess a secret code. This project is built using Node.js, Express, and MongoDB.

## Project Structure
```
bull-pgia-game
├── src
│   ├── app.js
│   ├── game
│   │   ├── bullPgia.js
│   │   └── utils.js
│   ├── routes
│   │   └── gameRoutes.js
│   └── controllers
│       └── gameController.js
├── package.json
└── README.md
```

## Setup Instructions

### 1. Create Project Directory
- Open your terminal or command prompt.
- Navigate to the location where you want to create your project.
- Run the command: `mkdir bull-pgia-game` to create the project folder.
- Navigate into the folder: `cd bull-pgia-game`.

### 2. Initialize Node.js Project
- Run `npm init -y` to create a `package.json` file with default settings.

### 3. Install Required Dependencies
- Install Express and Mongoose by running: `npm install express mongoose`.
- If you plan to use TypeScript, install TypeScript and types for Node and Express: `npm install typescript @types/node @types/express --save-dev`.

### 4. Set Up TypeScript (if using)
- Create a `tsconfig.json` file by running: `npx tsc --init`.
- Modify the `tsconfig.json` to include settings like `"target": "ES6"` and `"module": "commonjs"`.

### 5. Create Folder Structure
- Inside the `bull-pgia-game` directory, create the following folders and files:
  - `src/`
    - `app.js`
    - `game/`
      - `bullPgia.js`
      - `utils.js`
    - `routes/`
      - `gameRoutes.js`
    - `controllers/`
      - `gameController.js`

### 6. Implement Basic Server Setup
- In `src/app.js`, set up a basic Express server:
  - Import Express and create an instance of the app.
  - Set up middleware for JSON parsing.
  - Define routes using the routes you will create.

### 7. Create Game Logic
- In `src/game/bullPgia.js`, implement the game logic for generating a secret code and processing guesses.
- In `src/game/utils.js`, create utility functions that may be needed for the game.

### 8. Define Routes
- In `src/routes/gameRoutes.js`, define the API endpoints for starting a game, submitting guesses, and retrieving game status.

### 9. Create Controllers
- In `src/controllers/gameController.js`, implement the logic for handling requests from the routes, including creating games and processing guesses.

### 10. Set Up MongoDB Connection
- Create a database connection file (e.g., `src/db/connection.js`) to connect to MongoDB using Mongoose.

### 11. Implement Middleware
- Create middleware functions in `src/middleware/` to validate guesses and player data.

### 12. Testing with Postman
- Create a Postman collection to test your API endpoints. Include requests for adding players, starting games, and submitting guesses.

### 13. Documentation
- In `README.md`, document your project, including setup instructions, API endpoints, and how to run the application.

### 14. Version Control
- Initialize a Git repository by running `git init` and commit your changes regularly.

### 15. Final Steps
- Ensure your project meets all specifications and test thoroughly before submission.

## API Endpoints
- **POST /api/game/start**: Start a new game.
- **POST /api/game/guess**: Submit a guess.
- **GET /api/game/status**: Retrieve the current game status.

## Running the Application
- To run the application, use the command: `node src/app.js`.

## License
This project is licensed under the MIT License.