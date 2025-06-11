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
      {/* Internal CSS for matching theme */}
      <style>{`
        .sidebar-container {
          width: ${collapsed ? "60px" : "220px"};
          transition: width 0.3s ease;
          background: linear-gradient(to bottom right, white, #ebf8ff);
          min-height: 100vh;
          border-right: 1px solid #cbd5e1;
          box-shadow: 2px 0 6px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: fixed;
          top: 0;
          left: 0;
          padding: 1rem 0;
          z-index: 1000;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .sidebar-title-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 12px;
          margin-bottom: 1rem;
          box-sizing: border-box;
          overflow: hidden;
        }

        .sidebar-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1e3a8a;
          margin: 0;
          line-height: 1;
        }

        .sidebar-toggle-wrapper {
          display: flex;
          justify-content: ${collapsed ? "center" : "flex-end"};
          width: ${collapsed ? "100%" : "auto"};
        }

        .sidebar-toggle-btn {
          background-color: #f0f4ff;
          border: none;
          border-radius: 6px;
          padding: 6px 10px;
          font-size: 16px;
          color: #1e3a8a;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }

        .sidebar-toggle-btn:hover {
          background-color: #dbeafe;
        }

        .sidebar-nav-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .sidebar-link {
          color: #374151;
          font-weight: 600;
          text-decoration: none;
          margin-bottom: 1rem;
          font-size: ${collapsed ? "0" : "1.05rem"};
          transition: all 0.2s ease;
          text-align: center;
          width: 100%;
        }

        .sidebar-icon-link {
          font-size: 1.35rem;
          margin-bottom: 1rem;
          text-align: center;
          color: #2563eb;
          display: ${collapsed ? "block" : "none"};
        }

        .sidebar-link:hover {
          color: #1e40af;
        }

        .sidebar-logout-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 1rem 0;
        }

        .sidebar-logout-button {
          color: #dc2626;
          font-weight: 600;
          background: none;
          border: none;
          cursor: pointer;
          text-align: center;
          font-size: ${collapsed ? "0" : "1.05rem"};
          transition: color 0.3s ease;
        }

        .sidebar-logout-button:hover {
          color: #b91c1c;
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
