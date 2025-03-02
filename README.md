## Globetrotter Challenge

# 🌍 Globetrotter - The Ultimate Travel Guessing Game

Globetrotter is a **full-stack travel guessing game**, where players receive clues about famous destinations and must guess the correct location. After guessing, they unlock fun facts and trivia about the place, making learning about global cities fun and interactive!

---

## 🏗️ Project Structure

```
globetrotter/
│
├── server/              # Node.js & Express Backend
│   ├── controllers/      # Contains logic to handle API requests
│   ├── models/           # Data models (destination, user, etc.)
│   ├── routes/           # API routes
│   ├── utils/             # Helper functions (randomizer, etc.)
│   ├── data/              # Destination data
│   └── app.js             # Entry point
│
├── client/             # React Frontend
│   ├── src/
│   │   ├── components/   # React components (QuestionCard, RegisterScreen, etc.)
│   │   ├── App.js        # Main App component
│   │   ├── App.css       # Main styles
│   │   └── index.js      # React entry point
│   └── public/
│       └── index.html    # HTML template
│
└── README.md             # This file
```

---

## 🚀 Tech Stack

### Backend (Node.js + Express)

- **Node.js** - Runtime
- **Express.js** - Backend framework
- **MongoDB** - For persistent user scores

### Frontend (React)

- **React** - UI Framework
- **CSS** - Custom styles for game appearance

---

## ⚙️ Features

### 🌐 Backend Features

- **Destination Data Handling**

  - Load initial destination data (JSON-based)
  - Expand with AI-generated destinations (optional)
  - Serve randomized clues & multiple choice options to players
  - Compare player’s guesses with correct answers (only clues and answer sent back)

- **User Management**

  - Username registration & session handling (in-memory or MongoDB)
  - Score tracking (correct/incorrect count per player)

- **Invite System**

  - Generate unique invite links
  - Serve player scores on invite page before game starts

- **Endpoints Overview**
  - `POST /register` - Register username
  - `GET /question` - Fetch random question with clues and options
  - `POST /answer` - Submit answer & check result
  - `GET /invite/:inviteCode` - Fetch inviter’s score

---

### 💻 Frontend Features

- **Register Screen**

  - User enters a unique username to start
  - Basic validation for empty names

- **Question Screen**

  - Displays clues
  - Provides 4 randomized options
  - User selects an option (then buttons are disabled)
  - Immediate feedback (correct/incorrect)
  - Confetti animation for correct answers
  - Shows fun fact after answering
  - Tracks running score (correct/incorrect count)

- **Invite Flow**

  - Generates and displays WhatsApp-friendly invite link
  - Friend can click the link, see inviter’s score, and join the game

- **Responsive Design**
  - Works on both desktop and mobile

---

## 📂 API Documentation

### POST /register

Registers a new user.

**Request:**

```json
{
  "username": "player1"
}
```

**Response:**

```json
{
  "username": "player1",
  "score": {
    "correct": 0,
    "incorrect": 0
  }
}
```

---

### GET /question

Fetches a new question with clues and 4 options.

**Response:**

```json
{
  "clues": ["This city has...", "It is famous for..."],
  "options": ["Paris", "Tokyo", "New York", "Sydney"],
  "questionId": "abc123"
}
```

---

### POST /answer

Submit player’s answer.

**Request:**

```json
{
  "questionId": "abc123",
  "selectedOption": "Paris"
}
```

**Response:**

```json
{
  "correct": true,
  "funFact": "The Eiffel Tower was supposed to be dismantled after 20 years!"
}
```

---

### GET /invite/:inviteCode

Fetch inviter’s score for invite page.

**Response:**

```json
{
  "username": "player1",
  "score": {
    "correct": 5,
    "incorrect": 2
  }
}
```

---

## 🔧 How to Run

### Backend

1. Navigate to `server/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start server:
   ```bash
   npm run dev
   ```
4. Server runs on `http://localhost:3000`

---

### Frontend

1. Navigate to `client/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start React app:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`

---

## 🌟 Example Invite Link Flow

1. **Player A registers and plays the game.**
2. **Player A clicks "Challenge a Friend" and gets an invite link:**
   ```
   https://globetrotter-bay.vercel.app/invite/abc123
   ```
3. **Player B visits the link, sees Player A’s score, and starts their own game.**
