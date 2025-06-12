import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

        .navbar {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Poppins', sans-serif;
        }

        .navbar-brand {
          font-size: 1.75rem;
          font-weight: 700;
          color: #38bdf8;
          text-decoration: none;
        }

        .navbar-brand span {
          color: #60a5fa;
          text-shadow: 0 0 8px #60a5fa;
        }

        .navbar-links {
          display: flex;
          gap: 1.25rem;
        }

        .navbar-link {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease, transform 0.2s ease;
        }

        .navbar-link:hover {
          color: #38bdf8;
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .navbar-links {
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
          }

          .navbar-link {
            padding-left: 0.5rem;
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
