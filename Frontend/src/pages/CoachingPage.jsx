import React, { useEffect, useState } from "react";
import { getCoachingReport } from "../api/api";

const CoachingPage = () => {
  const [coachingText, setCoachingText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoaching = async () => {
      try {
        const res = await getCoachingReport();
        setCoachingText(res.coaching_report);
      } catch (error) {
        console.error("Failed to fetch coaching report:", error);
        setCoachingText(
          "❌ Could not fetch coaching report. Please try after analysis."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCoaching();
  }, []);

  const downloadReport = () => {
    const blob = new Blob([coachingText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "coaching_report.txt";
    link.click();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Titillium+Web:wght@300;600&display=swap');

        body {
          font-family: 'Titillium Web', sans-serif;
          background: black;
          color: white;
          margin: 0;
          padding: 0;
        }

        .coaching-container {
          max-width: 960px;
          margin: 60px auto;
          padding: 40px 32px;
          background: rgba(0, 0, 0, 0.65);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 28px rgba(56, 189, 248, 0.18);
          backdrop-filter: blur(20px);
        }

        .coaching-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.9rem;
          font-weight: 700;
          text-align: center;
          background: linear-gradient(to right, #38bdf8, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
          margin-bottom: 30px;
        }

        .loading {
          font-style: italic;
          color: white;
          text-align: center;
        }

        .report-box {
          padding: 20px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 14px;
          color: white;
          font-size: 14px;
          white-space: pre-wrap;
          max-height: 450px;
          overflow-y: auto;
          box-shadow: 0 0 16px rgba(255, 255, 255, 0.12);
          margin-bottom: 30px;
          font-family: "Courier New", monospace;
        }

        .download-button {
          background: linear-gradient(to right, #38bdf8, #0ea5e9);
          color: black;
          padding: 14px 22px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          display: block;
          margin: 0 auto;
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.25);
        }

        .download-button:hover {
          background-color: #0ea5e9;
          box-shadow: 0 0 20px #38bdf8;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .coaching-container {
            margin: 40px 16px;
            padding: 28px 20px;
          }

          .coaching-title {
            font-size: 1.5rem;
          }

          .download-button {
            font-size: 14px;
            padding: 12px 16px;
          }
        }
      `}</style>

      <div className="coaching-container">
        <h2 className="coaching-title">🧠 Personalized Coaching Report</h2>

        {loading ? (
          <p className="loading">Loading coaching report...</p>
        ) : (
          <>
            <div className="report-box">
              <pre>{coachingText}</pre>
            </div>

            <button onClick={downloadReport} className="download-button">
              ⬇️ Download as .txt
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CoachingPage;
