import React, { useState } from "react";
import { uploadCodeFile } from "../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a Python (.py) file.");
      return;
    }

    try {
      toast.info("Analyzing your code...");
      const result = await uploadCodeFile(file);
      localStorage.setItem("report", JSON.stringify(result));
      toast.success("Upload successful!");
      navigate("/dashboard/devscore");
    } catch (error) {
      toast.error("Upload failed. Check backend connection.");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        .upload-container {
          max-width: 520px;
          margin: 60px auto;
          padding: 30px;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          border: 1px solid #334155;
          border-radius: 20px;
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.15);
          text-align: center;
          font-family: 'Poppins', sans-serif;
        }

        .upload-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #38bdf8;
          margin-bottom: 25px;
          text-shadow: 0 0 6px #38bdf8;
        }

        .upload-input {
          width: 92%;
          padding: 12px;
          margin-bottom: 20px;
          background: #1e293b;
          color: #e2e8f0;
          border: 1px solid #475569;
          border-radius: 10px;
          font-size: 14px;
          transition: border-color 0.3s ease;
        }

        .upload-input:focus {
          border-color: #60a5fa;
          outline: none;
        }

        .upload-button {
          width: 100%;
          padding: 14px;
          background-color: #38bdf8;
          color: #0f172a;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px #38bdf8;
        }

        .upload-button:hover {
          background-color: #0ea5e9;
          box-shadow: 0 0 16px #0ea5e9;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="upload-container">
        <h2 className="upload-title">📁 Upload Your Python File</h2>
        <input
          type="file"
          accept=".py"
          onChange={(e) => setFile(e.target.files[0])}
          className="upload-input"
        />
        <button onClick={handleUpload} className="upload-button">
          🚀 Upload & Analyze
        </button>
      </div>
    </>
  );
};

export default UploadPage;
