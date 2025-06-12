import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/dashboard";

  const sidebarWidth = isCollapsed ? "60px" : "220px";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        html, body {
          font-family: 'Poppins', sans-serif;
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: #f1f5f9;
        }

        .dashboard-container {
          display: flex;
          min-height: 100vh;
        }

        .dashboard-main {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          transition: margin-left 0.3s ease;
        }

        .dashboard-header {
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
        }

        .dashboard-title {
          font-size: 2rem;
          font-weight: 700;
          color: #38bdf8;
          text-shadow: 0 0 12px #38bdf8;
          margin: 0;
        }

        .dashboard-content {
          flex-grow: 1;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow-y: auto;
        }

        .welcome-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(16px);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          text-align: center;
          max-width: 700px;
          width: 100%;
          margin-bottom: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .welcome-card:hover {
          transform: scale(1.015);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }

        .welcome-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #60a5fa;
          margin-bottom: 1rem;
        }

        .welcome-text {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .button-hover {
          padding: 0.75rem 1.5rem;
          background-color: #2563eb;
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .button-hover:hover {
          background-color: #1e40af;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        }

        .dashboard-footer {
          background: rgba(255, 255, 255, 0.03);
          color: #cbd5e1;
          padding: 1.25rem;
          text-align: center;
          font-size: 0.95rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
        }

        .dashboard-footer a {
          color: #38bdf8;
          text-decoration: none;
          margin: 0 0.25rem;
        }

        .dashboard-footer a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="dashboard-container">
        <Sidebar collapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <div className="dashboard-main" style={{ marginLeft: sidebarWidth }}>
          {/* Only show the title if on /dashboard */}
          {isHome && (
            <header className="dashboard-header">
              <h1 className="dashboard-title">CodeMentorAI Dashboard</h1>
            </header>
          )}

          <main className="dashboard-content">
            {isHome && (
              <div className="welcome-card">
                <h2 className="welcome-title">👋 Welcome to CodeMentorAI</h2>
                <p className="welcome-text">
                  Your personal AI-powered code mentor. Start by uploading your
                  Python file to get a DevScore, review detailed analysis, and
                  receive personalized coaching feedback with challenges.
                </p>
                <button
                  className="button-hover"
                  onClick={() => navigate("/dashboard/upload")}
                >
                  🚀 Upload Python File
                </button>
              </div>
            )}

            <div style={{ width: "100%", maxWidth: "900px" }}>
              <Outlet />
            </div>
          </main>

          <footer className="dashboard-footer">
            © {new Date().getFullYear()} CodeMentorAI. Built with 💙 by
            passionate developers.
            <br />
            <a href="#">Privacy Policy</a> · <a href="#">Terms</a> ·{" "}
            <a href="#">Contact</a>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
