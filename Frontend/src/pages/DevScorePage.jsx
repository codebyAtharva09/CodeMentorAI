import React from "react";
import { useNavigate } from "react-router-dom";

const DevScorePage = () => {
  const navigate = useNavigate();
  const report = JSON.parse(localStorage.getItem("report"));

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📊 Your DevScore</h2>
      <div style={styles.scoreBox}>
        <span style={styles.scoreLabel}>Score:</span>
        <span style={styles.scoreValue}>{report.dev_score}</span>
      </div>
      <button
        onClick={() => navigate("/dashboard/analysis")}
        style={styles.button}
      >
        View Detailed Analysis
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "60px auto",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
    border: "1px solid #cce7ff",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    color: "#003366",
    marginBottom: "24px",
  },
  scoreBox: {
    backgroundColor: "#e0f7e9",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "30px",
    border: "1px solid #66cc66",
  },
  scoreLabel: {
    fontSize: "18px",
    color: "#004d00",
    marginRight: "10px",
    fontWeight: "bold",
  },
  scoreValue: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#006600",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    backgroundColor: "#0066cc",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default DevScorePage;
