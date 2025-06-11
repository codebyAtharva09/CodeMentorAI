import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { uploadCodeFile, getCoachingReport } from "../api/api";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [devScore, setDevScore] = useState(null);
  const [report, setReport] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a Python (.py) file.");
      return;
    }

    setLoading(true);

    try {
      const result = await uploadCodeFile(file);
      setDevScore(result.dev_score);

      const coaching = await getCoachingReport();
      setReport(coaching.coaching_report);
      toast.success("Code analyzed successfully!");
    } catch (error) {
      console.error("Error during upload:", error);
      toast.error("Upload failed. Please ensure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const downloadReport = () => {
    const blob = new Blob([report], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "coaching_report.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={styles.container}>
      <Sidebar />

      <main style={styles.main}>
        <h1 style={styles.header}>Upload & Analyze Code</h1>

        <div style={styles.uploadBox}>
          <input
            type="file"
            accept=".py"
            onChange={(e) => setFile(e.target.files[0])}
            style={styles.input}
          />
          <button
            onClick={handleUpload}
            style={loading ? styles.buttonDisabled : styles.button}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Upload & Analyze"}
          </button>
        </div>

        {devScore !== null && (
          <div style={styles.devScore}>
            <h2>Your DevScore: {devScore}</h2>
          </div>
        )}

        {report && (
          <div style={styles.report}>
            <div style={styles.reportHeader}>
              <h2>Coaching Report</h2>
              <button onClick={downloadReport} style={styles.downloadButton}>
                Download .txt
              </button>
            </div>
            <pre style={styles.reportText}>{report}</pre>
          </div>
        )}
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, white, #cce7ff)",
  },
  main: {
    flex: 1,
    padding: "40px",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#004080",
    marginBottom: "24px",
  },
  uploadBox: {
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    marginBottom: "32px",
    border: "1px solid #99ccff",
  },
  input: {
    marginBottom: "16px",
    width: "100%",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0066cc",
    color: "white",
    fontWeight: "bold",
    borderRadius: "6px",
    cursor: "pointer",
  },
  buttonDisabled: {
    padding: "10px 20px",
    backgroundColor: "#99ccff",
    color: "white",
    fontWeight: "bold",
    borderRadius: "6px",
    cursor: "not-allowed",
  },
  devScore: {
    backgroundColor: "#ccffcc",
    padding: "16px",
    borderRadius: "10px",
    marginBottom: "24px",
    border: "1px solid #66cc66",
    color: "#006600",
  },
  report: {
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    border: "1px solid #ddd",
  },
  reportHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  downloadButton: {
    fontSize: "12px",
    backgroundColor: "#cce7ff",
    color: "#004080",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  reportText: {
    whiteSpace: "pre-wrap",
    lineHeight: "1.5",
    color: "#333",
  },
};

export default Dashboard;