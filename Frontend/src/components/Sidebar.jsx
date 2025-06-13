import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ collapsed, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Titillium+Web:wght@400;600&display=swap');

        .sidebar-container {
          width: ${collapsed ? "64px" : "230px"};
          transition: width 0.3s ease;
          background: linear-gradient(145deg, #0f172a, #1e293b);
          backdrop-filter: blur(14px);
          border-right: 1px solid #334155;
          box-shadow: 4px 0 20px rgba(0, 0, 0, 0.4);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: fixed;
          top: 0;
          left: 0;
          padding: 1rem 0;
          font-family: 'Titillium Web', sans-serif;
          z-index: 1000;
        }

        .sidebar-title-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem 1rem;
          overflow: hidden;
        }

        .sidebar-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #38bdf8;
          text-shadow: 0 0 8px #38bdf8;
        }

        .sidebar-toggle-wrapper {
          display: flex;
          justify-content: ${collapsed ? "center" : "flex-end"};
          width: ${collapsed ? "100%" : "auto"};
        }

        .sidebar-toggle-btn {
          background-color: #1e293b;
          border: 1px solid #475569;
          border-radius: 6px;
          padding: 6px 10px;
          font-size: 14px;
          color: #38bdf8;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .sidebar-toggle-btn:hover {
          background-color: #334155;
          transform: scale(1.05);
        }

        .sidebar-nav-container {
          display: flex;
          flex-direction: column;
          align-items: ${collapsed ? "center" : "flex-start"};
          padding: 0 1rem;
        }

        .sidebar-link,
        .sidebar-icon-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #e2e8f0;
          font-weight: 600;
          text-decoration: none;
          margin-bottom: 1.2rem;
          font-size: 1.05rem;
          width: 100%;
          transition: all 0.3s ease;
          white-space: nowrap;
          opacity: ${collapsed ? "0" : "1"};
        }

        .sidebar-icon-link {
          justify-content: center;
          font-size: 1.5rem;
          color: #38bdf8;
          opacity: 1;
        }

        .sidebar-link:hover,
        .sidebar-icon-link:hover {
          color: #60a5fa;
          text-shadow: 0 0 6px #3b82f6;
        }

        .sidebar-logout-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 1rem 0;
        }

        .sidebar-logout-button {
          background: none;
          border: none;
          color: #f87171;
          font-weight: 600;
          font-size: 1.05rem;
          cursor: pointer;
          transition: color 0.3s ease, text-shadow 0.3s ease;
          opacity: ${collapsed ? "0" : "1"};
        }

        .sidebar-logout-button:hover {
          color: #ef4444;
          text-shadow: 0 0 6px #ef4444;
        }

        @media (max-width: 640px) {
          .sidebar-container {
            width: ${collapsed ? "60px" : "200px"};
          }
        }
      `}</style>

      <div className="sidebar-container">
        <div>
          <div className="sidebar-title-container">
            {!collapsed && <h2 className="sidebar-title">CodeMentorAI</h2>}
            <div className="sidebar-toggle-wrapper">
              <button onClick={toggleSidebar} className="sidebar-toggle-btn">
                {collapsed ? "▶" : "◀"}
              </button>
            </div>
          </div>

          <div className="sidebar-nav-container">
            <Link
              to="/dashboard/upload"
              className={collapsed ? "sidebar-icon-link" : "sidebar-link"}
            >
              📁 {!collapsed && "Upload"}
            </Link>
            <Link
              to="/dashboard/devscore"
              className={collapsed ? "sidebar-icon-link" : "sidebar-link"}
            >
              📊 {!collapsed && "DevScore"}
            </Link>
            <Link
              to="/dashboard/analysis"
              className={collapsed ? "sidebar-icon-link" : "sidebar-link"}
            >
              📑 {!collapsed && "Analysis"}
            </Link>
            <Link
              to="/dashboard/coaching"
              className={collapsed ? "sidebar-icon-link" : "sidebar-link"}
            >
              🧠 {!collapsed && "Coaching"}
            </Link>
          </div>
        </div>

        <div className="sidebar-logout-wrapper">
          <button onClick={handleLogout} className="sidebar-logout-button">
            🚪 {!collapsed && "Logout"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
