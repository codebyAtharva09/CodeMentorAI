import React from "react";
import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        html, body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: #f1f5f9;
          margin: 0;
          padding: 0;
        }

        .register-container {
          min-height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }

        .register-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(14px);
          padding: 2rem;
          border-radius: 1.25rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          max-width: 400px;
          width: 100%;
          text-align: center;
        }

        .register-card h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #38bdf8;
          text-shadow: 0 0 15px #38bdf8;
          margin-bottom: 1.5rem;
        }

        .register-card p {
          font-size: 1rem;
          color: #cbd5e1;
          margin-bottom: 1rem;
        }

        .register-card .credential {
          font-weight: 600;
          color: #60a5fa;
        }

        @media (max-width: 500px) {
          .register-card {
            padding: 1.5rem;
          }

          .register-card h2 {
            font-size: 1.6rem;
          }
        }
      `}</style>

      <Navbar />

      <div className="register-container">
        <div className="register-card">
          <h2>Register</h2>
          <p>
            Registration is disabled for now. Please use the test credentials
            below:
          </p>
          <p className="credential">Username: testuser</p>
          <p className="credential">Password: password123</p>
        </div>
      </div>
    </>
  );
};

export default Register;
