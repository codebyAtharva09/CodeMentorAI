import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/api.js";
import Navbar from "../components/Navbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await loginUser(username, password);
    if (success) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials! Use testuser / password123");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        html, body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: #f1f5f9;
          scroll-behavior: smooth;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .login-container {
          min-height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }

        .login-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(14px);
          padding: 2rem;
          border-radius: 1.25rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 400px;
        }

        .login-card h2 {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          color: #38bdf8;
          text-shadow: 0 0 20px #38bdf8;
          margin-bottom: 2rem;
          animation: neonGlow 3s ease-in-out infinite alternate;
        }

        @keyframes neonGlow {
          0% { text-shadow: 0 0 10px #38bdf8; }
          100% { text-shadow: 0 0 20px #38bdf8, 0 0 30px #38bdf8; }
        }

        .login-input {
          width: 100%;
          margin-bottom: 1rem;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid #94a3b8;
          background: rgba(255, 255, 255, 0.1);
          color: #f1f5f9;
          font-size: 1rem;
          outline: none;
          transition: 0.3s;
        }

        .login-input:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.3);
        }

        .login-button {
          width: 100%;
          padding: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 50px;
          background: #38bdf8;
          color: #0f172a;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(56, 189, 248, 0.4);
        }

        .login-button:hover {
          background: #0ea5e9;
          transform: translateY(-2px);
        }

        @media (max-width: 500px) {
          .login-card {
            padding: 1.5rem;
          }

          .login-card h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <Navbar />

      <div className="login-container">
        <div className="login-card">
          <h2>
            Login to CodeMentor<span style={{ color: "#60a5fa" }}>AI</span>
          </h2>
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
