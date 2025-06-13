import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Titillium+Web:wght@400;600&display=swap');

        .navbar {
          font-family: 'Titillium Web', sans-serif;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          padding: 16px 32px;
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-brand {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          text-decoration: none;
          color: #38bdf8;
          text-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
          letter-spacing: 1px;
        }

        .navbar-brand span {
          color: #60a5fa;
          text-shadow: 0 0 12px #60a5fa;
        }

        .navbar-links {
          display: flex;
          gap: 1.5rem;
        }

        .navbar-link {
          color: #e2e8f0;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease;
        }

        .navbar-link:hover {
          color: #38bdf8;
          transform: translateY(-2px);
          text-shadow: 0 0 6px #38bdf8;
        }

        @media (max-width: 640px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
            padding: 16px 24px;
          }

          .navbar-links {
            flex-direction: column;
            width: 100%;
            gap: 0.75rem;
            margin-top: 10px;
          }

          .navbar-link {
            padding-left: 4px;
          }
        }
      `}</style>

      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          CodeMentor<span>AI</span>
        </Link>
        <div className="navbar-links">
          <Link to="/login" className="navbar-link">
            Login
          </Link>
          <Link to="/register" className="navbar-link">
            Register
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
