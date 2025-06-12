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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        .analysis-container {
          max-width: 900px;
          margin: 40px auto;
          padding: 30px;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          border: 1px solid #334155;
          border-radius: 20px;
          box-shadow: 0 0 18px rgba(56, 189, 248, 0.15);
          font-family: 'Poppins', sans-serif;
          color: #e2e8f0;
        }

        .analysis-title {
          font-size: 1.8rem;
          color: #38bdf8;
          margin-bottom: 30px;
          text-align: center;
          text-shadow: 0 0 8px #38bdf8;
        }

        .analysis-section {
          margin-bottom: 30px;
        }

        .analysis-label {
          font-size: 1.1rem;
          font-weight: 600;
          color: #60a5fa;
          margin-bottom: 12px;
        }

        .analysis-list {
          list-style-type: disc;
          padding-left: 20px;
        }

        .analysis-item {
          margin-bottom: 6px;
          color: #cbd5e1;
        }

        .code-block {
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.25);
          padding: 16px;
          border-radius: 12px;
          white-space: pre-wrap;
          color: #e0f2fe;
          font-size: 14px;
          font-family: "Courier New", monospace;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.1);
        }

        hr {
          border: none;
          border-top: 1px solid #334155;
          margin: 40px 0;
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

        {/* LLM (Gemini) Feedback */}
        <div className="analysis-section">
          <h4 className="analysis-label">🤖 Gemini AI Feedback:</h4>
          <pre className="code-block">
            {report.llm_feedback &&
            typeof report.llm_feedback === "string" &&
            report.llm_feedback.trim().length > 0 &&
            !report.llm_feedback.toLowerCase().includes("api key not valid")
              ? report.llm_feedback
              : "Gemini feedback unavailable. Please check your API key."}
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
