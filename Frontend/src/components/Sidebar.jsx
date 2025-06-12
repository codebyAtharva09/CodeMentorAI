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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        .sidebar-container {
          width: ${collapsed ? "60px" : "220px"};
          transition: width 0.3s ease;
          background: linear-gradient(145deg, #0f172a, #1e293b);
          border-right: 1px solid #334155;
          box-shadow: 2px 0 10px rgba(0,0,0,0.4);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: fixed;
          top: 0;
          left: 0;
          padding: 1rem 0;
          z-index: 1000;
          font-family: 'Poppins', sans-serif;
        }

        .sidebar-title-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem 1rem;
          margin-bottom: 1rem;
          overflow: hidden;
        }

        .sidebar-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #38bdf8;
          text-shadow: 0 0 8px #38bdf8;
          margin: 0;
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
          font-size: 16px;
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
          align-items: center;
          width: 100%;
        }

        .sidebar-link,
        .sidebar-icon-link {
          color: #e2e8f0;
          font-weight: 600;
          text-decoration: none;
          margin-bottom: 1rem;
          font-size: ${collapsed ? "0" : "1.05rem"};
          transition: all 0.2s ease;
          text-align: center;
          width: 100%;
        }

        .sidebar-icon-link {
          font-size: 1.5rem;
          display: ${collapsed ? "block" : "none"};
          color: #38bdf8;
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
          color: #f87171;
          font-weight: 600;
          background: none;
          border: none;
          cursor: pointer;
          font-size: ${collapsed ? "0" : "1.05rem"};
          transition: color 0.3s ease;
        }

        .sidebar-logout-button:hover {
          color: #ef4444;
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
              📁 {collapsed ? "" : "Upload"}
            </Link>
            <Link
              to="/dashboard/devscore"
              className={collapsed ? "sidebar-icon-link" : "sidebar-link"}
            >
              📊 {collapsed ? "" : "DevScore"}
            </Link>
            <Link
              to="/dashboard/analysis"
              className={collapsed ? "sidebar-icon-link" : "sidebar-link"}
            >
              📑 {collapsed ? "" : "Analysis"}
            </Link>
            <Link
              to="/dashboard/coaching"
              className={collapsed ? "sidebar-icon-link" : "sidebar-link"}
            >
              🧠 {collapsed ? "" : "Coaching"}
            </Link>
          </div>
        </div>

        <div className="sidebar-logout-wrapper">
          <button onClick={handleLogout} className="sidebar-logout-button">
            🚪 {collapsed ? "" : "Logout"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
