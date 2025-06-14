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
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&family=Titillium+Web:wght@300;600&display=swap');

        html, body {
          font-family: 'Titillium Web', sans-serif;
          margin: 0;
          padding: 0;
          background: black;
          color: white;
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
          padding: 1.75rem 2rem;
          background: rgba(0, 0, 0, 0.5);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
        }

        .dashboard-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 2.1rem;
          font-weight: 800;
          background: linear-gradient(to right, #38bdf8, #3b82f6, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 10px rgba(56, 189, 248, 0.4);
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
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          padding: 2rem;
          border-radius: 1.25rem;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.35);
          text-align: center;
          max-width: 750px;
          width: 100%;
          margin-bottom: 2.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .welcome-card:hover {
          transform: scale(1.015);
          box-shadow:
            0 0 15px rgba(46, 204, 113, 0.5),
            0 0 25px rgba(52, 152, 219, 0.4),
            0 8px 30px rgba(0, 0, 0, 0.5);
        }

        .welcome-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.9rem;
          font-weight: 700;
          background: linear-gradient(to right, #f43f5e, #38bdf8, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          text-shadow: 0 0 6px rgba(255, 255, 255, 0.15);
        }

        .welcome-text {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .button-hover {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(to right, #2ecc71, #3498db);
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 0 12px rgba(46, 204, 113, 0.3), 0 0 12px rgba(52, 152, 219, 0.3);
        }

        .button-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(46, 204, 113, 0.5), 0 8px 20px rgba(52, 152, 219, 0.5);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto 2.5rem;
        }

        .feature-card {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          padding: 1.5rem;
          border-radius: 1rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(56, 189, 248, 0.2);
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          background: linear-gradient(to right, #38bdf8, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .feature-card p {
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .stats-section {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }

        .stat-card {
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          padding: 1.5rem 2.5rem;
          border-radius: 1rem;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          display: block;
          font-family: 'Orbitron', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(to right, #f43f5e, #38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 1rem;
          font-weight: 500;
        }

        .dashboard-footer {
          background: rgba(15, 23, 42, 0.5);
          color: #94a3b8;
          padding: 1.25rem;
          text-align: center;
          font-size: 0.95rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }

        .dashboard-footer a {
          color: #38bdf8;
          text-decoration: none;
          margin: 0 0.25rem;
          transition: color 0.3s ease;
        }

        .dashboard-footer a:hover {
          color: #7dd3fc;
          text-decoration: underline;
        }
      `}</style>

      <div className="dashboard-container">
        <Sidebar collapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <div className="dashboard-main" style={{ marginLeft: sidebarWidth }}>
          {isHome && (
            <header className="dashboard-header">
              <h1 className="dashboard-title">CodeMentorAI Dashboard</h1>
            </header>
          )}

          <main className="dashboard-content">
            {isHome && (
              <>
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

                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">📊</div>
                    <h3>DevScore Analysis</h3>
                    <p>Get a comprehensive score based on code quality, complexity, and best practices</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🔍</div>
                    <h3>Code Review</h3>
                    <p>Detailed analysis of your code structure, patterns, and potential improvements</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🎯</div>
                    <h3>Smart Suggestions</h3>
                    <p>AI-powered recommendations for optimizing your code and fixing issues</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🎓</div>
                    <h3>Learning Path</h3>
                    <p>Personalized challenges and exercises to improve your coding skills</p>
                  </div>
                </div>

                <div className="stats-section">
                  <div className="stat-card">
                    <span className="stat-number">100+</span>
                    <span className="stat-label">Code Patterns</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Best Practices</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">AI Support</span>
                  </div>
                </div>
              </>
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
