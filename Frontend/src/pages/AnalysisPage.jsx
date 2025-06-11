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
      <div style={{ padding: "20px", textAlign: "center", color: "#777" }}>
        ⚠️ No report data found. Please upload a file first.
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📑 Code Analysis Report</h2>

      {/* Maintainability Index */}
      <div style={styles.section}>
        <h4 style={styles.label}>📏 Maintainability Index:</h4>
        <p>
          {report.maintainability_index !== undefined &&
          report.maintainability_index !== null &&
          !isNaN(report.maintainability_index)
            ? report.maintainability_index
            : "Not available"}
        </p>
      </div>

      {/* Raw Metrics */}
      {report.raw_metrics && (
        <div style={styles.section}>
          <h4 style={styles.label}>📊 Raw Metrics:</h4>
          <ul>
            {Object.entries(report.raw_metrics).map(([key, value]) => (
              <li key={key} style={styles.listItem}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cyclomatic Complexity */}
      {report.cyclomatic_complexity && (
        <div style={styles.section}>
          <h4 style={styles.label}>🧠 Cyclomatic Complexity:</h4>
          <pre style={styles.codeBlock}>
            {report.cyclomatic_complexity.length > 0
              ? report.cyclomatic_complexity.join("\n")
              : "No complex blocks found."}
          </pre>
        </div>
      )}

      {/* Pylint Output */}
      <div style={styles.section}>
        <h4 style={styles.label}>🔍 Pylint Output:</h4>
        <pre style={styles.codeBlock}>
          {report.pylint && typeof report.pylint === "string"
            ? report.pylint
            : "⚠️ Pylint output not available or invalid."}
        </pre>
      </div>

      {/* LLM (Gemini) Feedback */}
      <div style={styles.section}>
        <h4 style={styles.label}>🤖 Gemini AI Feedback:</h4>
        <pre style={styles.codeBlock}>
          {report.llm_feedback &&
          typeof report.llm_feedback === "string" &&
          report.llm_feedback.trim().length > 0 &&
          !report.llm_feedback.toLowerCase().includes("api key not valid")
            ? report.llm_feedback
            : "Gemini feedback unavailable. Please check your API key."}
        </pre>
      </div>

      <hr style={{ margin: "30px 0" }} />

      {/* Coaching Feedback */}
      <div style={styles.section}>
        <h2 style={styles.title}>🧠 Personalized Coaching Feedback</h2>
        <pre style={styles.codeBlock}>
          {coaching || "No coaching feedback yet."}
        </pre>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.05)",
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "24px",
    color: "#003366",
    marginBottom: "24px",
  },
  section: {
    marginBottom: "24px",
  },
  label: {
    fontSize: "18px",
    color: "#004080",
    marginBottom: "8px",
  },
  listItem: {
    fontSize: "15px",
    marginBottom: "4px",
  },
  codeBlock: {
    backgroundColor: "#f9f9f9",
    padding: "12px",
    borderRadius: "6px",
    fontSize: "14px",
    whiteSpace: "pre-wrap",
    border: "1px solid #ddd",
  },
};

export default AnalysisPage;
