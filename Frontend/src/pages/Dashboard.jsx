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
      {/* Internal CSS for matching theme */}
      <style>{`
        .dashboard-container {
          background: linear-gradient(to bottom right, white, #ebf8ff);
          min-height: 100vh;
          display: flex;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .dashboard-main {
          flex-grow: 1;
          transition: margin-left 0.3s ease;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .dashboard-header {
          padding: 20px 30px;
          background-color: #e6f2ff;
          border-bottom: 1px solid #d1e0f0;
          text-align: center;
        }

        .dashboard-title {
          font-size: 2rem;
          font-weight: 800;
          color: #1e3a8a;
          margin: 0;
        }

        .dashboard-content {
          flex-grow: 1;
          padding: 30px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .welcome-card {
          background-color: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          max-width: 700px;
          width: 100%;
          text-align: center;
          margin-bottom: 40px;
          border: 1px solid #cce7ff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .welcome-card:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .welcome-title {
          font-size: 24px;
          font-weight: 600;
          color: #1e3a8a;
          margin-bottom: 16px;
        }

        .welcome-text {
          font-size: 16px;
          color: #4b5563;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .button-hover {
          padding: 12px 24px;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .button-hover:hover {
          background-color: #1d4ed8;
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }

        .dashboard-footer {
          margin-top: auto;
          background-color: #f0f9ff;
          color: #1e3a8a;
          padding: 1.5rem;
          text-align: center;
          font-size: 0.95rem;
          border-top: 1px solid #cbd5e1;
        }

        .dashboard-footer a {
          color: #1d4ed8;
          text-decoration: none;
          margin: 0 0.25rem;
          font-weight: 500;
        }

        .dashboard-footer a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="dashboard-container">
        <Sidebar collapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <div className="dashboard-main" style={{ marginLeft: sidebarWidth }}>
          <header className="dashboard-header">
            <h1 className="dashboard-title">CodeMentorAI Dashboard</h1>
          </header>

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
            <div
              style={{ width: "100%", maxWidth: "900px", marginBottom: "30px" }}
            >
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
