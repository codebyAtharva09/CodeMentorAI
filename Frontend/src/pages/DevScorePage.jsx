import React from "react";
import { useNavigate } from "react-router-dom";

const DevScorePage = () => {
  const navigate = useNavigate();
  const report = JSON.parse(localStorage.getItem("report"));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Titillium+Web:wght@300;600&display=swap');

        body {
          font-family: 'Titillium Web', sans-serif;
          background: radial-gradient(circle at top left, #0f172a, #020617);
          color: #e2e8f0;
          margin: 0;
          padding: 0;
        }

        .devscore-container {
          max-width: 600px;
          margin: 80px auto;
          padding: 40px 32px;
          background: rgba(15, 23, 42, 0.65);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 30px rgba(56, 189, 248, 0.12);
          text-align: center;
          backdrop-filter: blur(18px);
        }

        .devscore-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(to right, #38bdf8, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 8px rgba(56, 189, 248, 0.4);
          margin-bottom: 30px;
        }

        .devscore-box {
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.3);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 28px;
          margin-bottom: 36px;
          box-shadow: 0 0 16px rgba(59, 130, 246, 0.15);
        }

        .score-label {
          font-size: 1.2rem;
          font-weight: 600;
          color: #93c5fd;
        }

        .score-value {
          display: block;
          font-size: 3rem;
          font-weight: 700;
          color: #60a5fa;
          margin-top: 10px;
          text-shadow: 0 0 10px #60a5fa;
        }

        .analyze-button {
          padding: 14px 30px;
          background-color: #38bdf8;
          color: #0f172a;
          font-size: 1rem;
          font-weight: 700;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.6);
          transition: all 0.3s ease;
        }

        .analyze-button:hover {
          background-color: #0ea5e9;
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(14, 165, 233, 0.8);
        }

        @media (max-width: 600px) {
          .devscore-container {
            margin: 40px 16px;
            padding: 28px 20px;
          }
        }
      `}</style>

      <div className="devscore-container">
        <h2 className="devscore-title">📊 Your DevScore</h2>
        <div className="devscore-box">
          <span className="score-label">Score:</span>
          <span className="score-value">{report.dev_score}</span>
        </div>
        <button
          className="analyze-button"
          onClick={() => navigate("/dashboard/analysis")}
        >
          🔍 View Detailed Analysis
        </button>
      </div>
    </>
  );
};

export default DevScorePage;
