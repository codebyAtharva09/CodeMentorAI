import React from "react";
import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Titillium+Web:wght@300;600&display=swap');

        html, body {
          font-family: 'Titillium Web', sans-serif;
          background-color: #020617;
          background: radial-gradient(circle at top left, #0f172a, #020617);
          color: #f1f5f9;
          margin: 0;
          padding: 0;
        }

        .register-container {
          min-height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }

        .register-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid #38BDF8;
          backdrop-filter: blur(12px);
          padding: 2.5rem;
          border-radius: 1.5rem;
          box-shadow: 0 0 25px rgba(56, 189, 248, 0.25);
          max-width: 420px;
          width: 100%;
          text-align: center;
        }

        .register-card h2 {
          font-family: 'Orbitron', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #60A5FA; /* Solid color */
          text-shadow: 0 0 6px rgba(96, 165, 250, 0.3); /* Soft glow */
          margin-bottom: 1.5rem;
        }

        .register-card p {
          font-size: 1rem;
          color: #94A3B8;
          margin-bottom: 1rem;
        }

        .register-card .credential {
          font-weight: 600;
          color: #60A5FA;
          font-family: 'Orbitron', sans-serif;
          letter-spacing: 1px;
          font-size: 0.95rem;
          text-shadow: 0 0 8px rgba(96,165,250, 0.4);
        }

        @media (max-width: 500px) {
          .register-card {
            padding: 1.8rem;
          }

          .register-card h2 {
            font-size: 1.6rem;
          }

          .register-card p,
          .register-card .credential {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="register-container">
        <div className="register-card">
          <h2>Register</h2>
          <p>Registration is currently disabled.</p>
          <p>Please use the following test credentials:</p>
          <p className="credential">Username: testuser</p>
          <p className="credential">Password: password123</p>
        </div>
      </div>
    </>
  );
};

export default Register;
