import React from "react";
import { useNavigate } from "react-router-dom";

const DevScorePage = () => {
  const navigate = useNavigate();
  const report = JSON.parse(localStorage.getItem("report"));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        .devscore-container {
          max-width: 600px;
          margin: 60px auto;
          padding: 30px;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          border-radius: 20px;
          border: 1px solid #334155;
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.15);
          font-family: 'Poppins', sans-serif;
          text-align: center;
        }

        .devscore-title {
          font-size: 1.8rem;
          color: #38bdf8;
          margin-bottom: 30px;
          text-shadow: 0 0 6px #38bdf8;
        }

        .devscore-box {
          background: rgba(59, 130, 246, 0.08); /* subtle glass background */
          border: 1px solid rgba(59, 130, 246, 0.3); /* soft neon border */
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 24px;
          border-radius: 16px;
          margin-bottom: 30px;
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.15);
        }

        .score-label {
          font-size: 1.2rem;
          color: #93c5fd;
          font-weight: 600;
        }

        .score-value {
          font-size: 2.4rem;
          font-weight: 700;
          color: #60a5fa;
          text-shadow: 0 0 8px #60a5fa;
        }

        .analyze-button {
          background-color: #38bdf8;
          color: #0f172a;
          border: none;
          border-radius: 9999px;
          padding: 14px 28px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 0 12px #38bdf8;
          transition: all 0.3s ease;
        }

        .analyze-button:hover {
          background-color: #0ea5e9;
          box-shadow: 0 0 18px #0ea5e9;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="devscore-container">
        <h2 className="devscore-title">📊 Your DevScore</h2>
        <div className="devscore-box">
          <span className="score-label">Score:</span>
          <br />
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
