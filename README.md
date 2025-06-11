# CodeMentorAI

CodeMentorAI is an AI-powered code mentor platform that analyzes Python code and provides a DevScore along with improvement suggestions and personalized challenges.

---

## Features

- Upload your `.py` files for analysis
- Automatically calculates a DevScore (code quality score)
- Gives coaching advice based on the report
- Full-stack app with React frontend and FastAPI backend

---

## Project Structure

CodeMentorAI/
├── Analyzer/ # Code analysis logic
├── coach/ # Coaching agent
├── data/ # Generated reports
├── backend/ # FastAPI backend
│ └── main.py
├── Frontend/ # React frontend
├── requirements.txt # Python dependencies
└── README.md

---

## Getting Started

### 1. Run the Backend

```bash
cd CodeMentorAI
pip install -r requirements.txt
uvicorn backend.main:app --reload
```

### 2. Run the Frontend

```bash
cd Frontend
npm install
npm run dev
```

---

## Test Credentials

- Username: testuser
- Password: password123

---

## Usage

- Open the app at http://localhost:5173/
- Login with the test credentials
- Go to Dashboard and upload a Python file
- View your DevScore and coaching feedback

---

## License

This project is for educational use. Feel free to explore, fork, or build upon it.
