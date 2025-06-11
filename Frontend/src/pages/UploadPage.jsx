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
        .upload-container {
          max-width: 500px;
          margin: 40px auto;
          padding: 25px;
          background: linear-gradient(to bottom right, white, #ebf8ff);
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          border: 1px solid #cce7ff;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .upload-title {
          font-size: 20px;
          font-weight: 700;
          color: #1e3a8a;
          margin-bottom: 15px;
        }

        .upload-input {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #cce7ff;
          border-radius: 6px;
          font-size: 14px;
          transition: border-color 0.3s ease;
        }

        .upload-input:focus {
          border-color: #2563eb;
          outline: none;
        }

        .upload-button {
          display: block;
          width: 100%;
          padding: 12px;
          background-color: #2563eb;
          color: white;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .upload-button:hover {
          background-color: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
