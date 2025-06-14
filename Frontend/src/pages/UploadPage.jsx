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
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Titillium+Web:wght@300;600&display=swap');

        body {
          font-family: 'Titillium Web', sans-serif;
          background: black;
          margin: 0;
          padding: 0;
          color: white;
        }

        .upload-container {
          max-width: 520px;
          margin: 80px auto;
          padding: 36px 32px;
          background: rgba(0, 0, 0, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          box-shadow: 0 0 30px rgba(56, 189, 248, 0.12);
          text-align: center;
          backdrop-filter: blur(18px);
        }

        .upload-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(to right, #38bdf8, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
          margin-bottom: 25px;
        }

        .upload-input {
          width: 90%;
          padding: 12px;
          margin-bottom: 24px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(100, 116, 139, 0.2);
        }

        .upload-input:focus {
          border-color: #38BDF8;
          box-shadow: 0 0 0 2px rgba(56,189,248, 0.3);
          outline: none;
        }

        .upload-button {
          width: 100%;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(to right, #2ecc71, #3498db);
          color: white;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 12px rgba(46, 204, 113, 0.3), 0 0 12px rgba(52, 152, 219, 0.3);
        }

        .upload-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(46, 204, 113, 0.5), 0 8px 20px rgba(52, 152, 219, 0.5);
        }

        @media (max-width: 600px) {
          .upload-container {
            margin: 40px 20px;
            padding: 24px;
          }
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
