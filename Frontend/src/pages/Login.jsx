import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { loginUser } from "../api/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await loginUser(username, password);
    if (success) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <>
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Titillium+Web:wght@300;600&display=swap');

        body {
          font-family: 'Titillium Web', sans-serif;
          background-color: black;
          color: white;
        }

        .login-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: black;
          padding: 2rem;
        }

.login-box {
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(12px);
  border: 2px solid transparent;
  border-radius: 1rem;
  padding: 2.5rem;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 0 25px rgba(46, 204, 113, 0.4), 0 0 35px rgba(52, 152, 219, 0.3);
  background-clip: padding-box;
}

.login-box::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 2px;
  border-radius: 1rem;
  background: linear-gradient(to right, #2ecc71, #3498db);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
}


        .login-title {
          text-align: center;
          font-family: 'Orbitron', sans-serif;
          font-size: 2rem;
          color: white;
          margin-bottom: 2rem;
          text-shadow: 0 0 12px rgba(59,130,246, 0.3);
        }

        label {
          display: block;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
          color: #94A3B8;
        }

        input {
          width: 93%;
          padding: 0.75rem;
          margin-bottom: 1.2rem;
          border-radius: 8px;
          background-color: #333;
          border: 1px solid #1e293b;
          color: white;
        }

        input::placeholder {
          color: #64748B;
        }

        input:focus {
          outline: none;
          border-color: #38BDF8;
          box-shadow: 0 0 0 2px rgba(56,189,248, 0.3);
        }

        .forgot-link {
          display: flex;
          justify-content: flex-end;
          font-size: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .forgot-link a {
          color: #60A5FA;
          text-decoration: none;
        }

        .forgot-link a:hover {
          text-decoration: underline;
        }

.login-button {
  width: 100%;
  padding: 0.75rem;
  background: #38BDF8;
  border: none;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s, background 0.5s, color 0.3s;
}

.login-button:hover {
  transform: scale(1.05);
  background: linear-gradient(to right, #2ecc71, #3498db); /* Green to Blue */
  color: white;
  box-shadow: 0 5px 20px rgba(56,189,248, 0.4);
}


        .divider {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .divider-text {
          margin: 0 1rem;
          font-size: 0.875rem;
          color: #64748B;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .social-icons a {
          color: #38BDF8;
          transition: transform 0.3s, color 0.3s;
        }

        .social-icons a:hover:nth-child(1) { color: #FF4F91; transform: scale(1.2); }
        .social-icons a:hover:nth-child(2) { color: #1DA1F2; transform: scale(1.2); }
        .social-icons a:hover:nth-child(3) { color: #8e44ad; transform: scale(1.2); }

        .signup-text {
          font-size: 0.875rem;
          text-align: center;
          color: #CBD5E1;
        }

        .signup-text a {
          color: #3B82F6;
          text-decoration: none;
        }

        .signup-text a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="login-page">
        <div className="login-box">
          <h2 className="login-title">Sign In</h2>
          <form onSubmit={handleLogin}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="login-button">
              Sign in
            </button>
          </form>

          <div className="divider">
            <div className="divider-line" />
            <span className="divider-text">or sign in with</span>
            <div className="divider-line" />
          </div>

          <div className="social-icons">
            <a href="#">
              <FaGoogle />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaGithub />
            </a>
          </div>

          <p className="signup-text">
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
