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
    <div style={styles.container}>
      <h2 style={styles.title}>🧠 Personalized Coaching Report</h2>

      {loading ? (
        <p style={styles.loading}>Loading coaching report...</p>
      ) : (
        <>
          <div style={styles.reportBox}>
            <pre style={styles.reportText}>{coachingText}</pre>
          </div>

          <button onClick={downloadReport} style={styles.button}>
            ⬇️ Download as .txt
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fdfdfd",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "24px",
    color: "#003366",
    marginBottom: "16px",
  },
  loading: {
    fontStyle: "italic",
    color: "#555",
  },
  reportBox: {
    padding: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    backgroundColor: "#fafafa",
    marginBottom: "16px",
    maxHeight: "400px",
    overflowY: "auto",
  },
  reportText: {
    whiteSpace: "pre-wrap",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#333",
  },
  button: {
    backgroundColor: "#004080",
    color: "white",
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  },
};

export default CoachingPage;
