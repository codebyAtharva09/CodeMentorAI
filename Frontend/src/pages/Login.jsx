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
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          background: "linear-gradient(to bottom right, white, #ebf8ff)",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            borderRadius: "1rem",
            padding: "2rem",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#1e40af",
              marginBottom: "1rem",
            }}
          >
            Login
          </h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "1rem",
              padding: "0.5rem 1rem",
              border: "1px solid #ccc",
              borderRadius: "0.375rem",
              outline: "none",
              boxSizing: "border-box",
            }}
            onFocus={(e) =>
              (e.target.style.boxShadow = "0 0 0 2px #60a5fa")
            }
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "1.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid #ccc",
              borderRadius: "0.375rem",
              outline: "none",
              boxSizing: "border-box",
            }}
            onFocus={(e) =>
              (e.target.style.boxShadow = "0 0 0 2px #60a5fa")
            }
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              backgroundColor: "#2563eb",
              color: "white",
              padding: "0.5rem",
              borderRadius: "0.375rem",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#1d4ed8")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#2563eb")
            }
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
