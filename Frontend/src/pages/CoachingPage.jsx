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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        .coaching-container {
          max-width: 900px;
          margin: 50px auto;
          padding: 30px;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          border-radius: 18px;
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.12);
          font-family: 'Poppins', sans-serif;
          color: #e2e8f0;
          border: 1px solid #334155;
        }

        .coaching-title {
          font-size: 1.8rem;
          color: #38bdf8;
          margin-bottom: 25px;
          text-align: center;
          text-shadow: 0 0 8px #38bdf8;
        }

        .loading {
          font-style: italic;
          color: #94a3b8;
          text-align: center;
        }

        .report-box {
          padding: 20px;
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          color: #e0f2fe;
          font-size: 14px;
          white-space: pre-wrap;
          max-height: 400px;
          overflow-y: auto;
          margin-bottom: 20px;
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.15);
        }

        .download-button {
          background-color: #38bdf8;
          color: #0f172a;
          padding: 12px 18px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          display: block;
          margin: 0 auto;
        }

        .download-button:hover {
          background-color: #0ea5e9;
          box-shadow: 0 0 10px #38bdf8;
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
