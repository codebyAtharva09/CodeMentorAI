import React, { useEffect, useState } from "react";
import { getCoachingReport } from "../api/api";

const AnalysisPage = () => {
  const [coaching, setCoaching] = useState("");
  const [report, setReport] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("report");
    if (saved) {
      setReport(JSON.parse(saved));
    }

    getCoachingReport().then((res) => {
      setCoaching(res.coaching_report);
    });
  }, []);

  if (!report) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "#94a3b8" }}>
        ⚠️ No report data found. Please upload a file first.
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Titillium+Web:wght@300;600&display=swap');

        body {
          font-family: 'Titillium Web', sans-serif;
          background: radial-gradient(circle at top left, #0f172a, #020617);
          color: #e2e8f0;
          margin: 0;
          padding: 0;
        }

        .analysis-container {
          max-width: 980px;
          margin: 60px auto;
          padding: 40px 32px;
          background: rgba(15, 23, 42, 0.65);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 28px rgba(56, 189, 248, 0.18);
          backdrop-filter: blur(20px);
          font-family: 'Titillium Web', sans-serif;
        }

        .analysis-title {
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

        .analysis-section {
          margin-bottom: 40px;
        }

        .analysis-label {
          font-size: 1.2rem;
          font-weight: 600;
          color: #60a5fa;
          margin-bottom: 12px;
        }

        .analysis-list {
          list-style-type: disc;
          padding-left: 24px;
          margin-top: 10px;
        }

        .analysis-item {
          margin-bottom: 6px;
          color: #cbd5e1;
        }

        .code-block {
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.25);
          padding: 18px;
          border-radius: 14px;
          white-space: pre-wrap;
          color: #e0f2fe;
          font-size: 14px;
          font-family: "Courier New", monospace;
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.15);
        }

        hr {
          border: none;
          border-top: 1px solid #334155;
          margin: 50px 0;
        }

        @media (max-width: 768px) {
          .analysis-container {
            margin: 40px 16px;
            padding: 28px 20px;
          }

          .analysis-title {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="analysis-container">
        <h2 className="analysis-title">📑 Code Analysis Report</h2>

        {/* Maintainability Index */}
        <div className="analysis-section">
          <h4 className="analysis-label">📏 Maintainability Index:</h4>
          <p>{report.maintainability_index ?? "Not available"}</p>
        </div>

        {/* Raw Metrics */}
        {report.raw_metrics && (
          <div className="analysis-section">
            <h4 className="analysis-label">📊 Raw Metrics:</h4>
            <ul className="analysis-list">
              {Object.entries(report.raw_metrics).map(([key, value]) => (
                <li key={key} className="analysis-item">
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Cyclomatic Complexity */}
        {report.cyclomatic_complexity && (
          <div className="analysis-section">
            <h4 className="analysis-label">🧠 Cyclomatic Complexity:</h4>
            <pre className="code-block">
              {report.cyclomatic_complexity.length > 0
                ? report.cyclomatic_complexity.join("\n")
                : "No complex blocks found."}
            </pre>
          </div>
        )}

        {/* Pylint Output */}
        <div className="analysis-section">
          <h4 className="analysis-label">🔍 Pylint Output:</h4>
          <pre className="code-block">
            {report.pylint && typeof report.pylint === "string"
              ? report.pylint
              : "⚠️ Pylint output not available or invalid."}
          </pre>
        </div>

        {/* LLM (Novita AI) Feedback */}
        <div className="analysis-section">
          <h4 className="analysis-label">🤖 Novita AI Feedback:</h4>
          <pre className="code-block">
            {report.llm_feedback &&
            typeof report.llm_feedback === "string" &&
            report.llm_feedback.trim().length > 0 &&
            !report.llm_feedback.toLowerCase().includes("api key not valid")
              ? report.llm_feedback
              : "Novita AI feedback unavailable. Please check your API key."}
          </pre>
        </div>

        <hr />

        {/* Coaching Feedback */}
        <div className="analysis-section">
          <h2 className="analysis-title">🧠 Personalized Coaching Feedback</h2>
          <pre className="code-block">
            {coaching || "No coaching feedback yet."}
          </pre>
        </div>
      </div>
    </>
  );
};

export default AnalysisPage;
