import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ collapsed, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Titillium+Web:wght@400;600&display=swap');

        .sidebar-container {
          width: ${collapsed ? "64px" : "230px"};
          transition: width 0.3s ease;
          background: black;
          backdrop-filter: blur(14px);
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 25px rgba(46, 204, 113, 0.4), 0 0 35px rgba(52, 152, 219, 0.3);
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
          justify-content: flex-end;
          margin-left: auto;
        }

        .sidebar-toggle-btn {
          background-color: #333;
          border: 1px solid #555;
          border-radius: 6px;
          padding: 6px 10px;
          font-size: 14px;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
          min-width: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sidebar-toggle-btn:hover {
          background-color: #555;
          transform: scale(1.05);
        }

        .sidebar-nav-container {
          display: flex;
          flex-direction: column;
          align-items: ${collapsed ? "center" : "flex-start"};
          padding: 0 1rem;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #e2e8f0;
          font-weight: 600;
          text-decoration: none;
          margin-bottom: 1.2rem;
          font-size: 1.05rem;
          width: 100%;
          transition: all 0.3s ease;
          white-space: nowrap;
          padding: 0.5rem;
          border-radius: 0.5rem;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .sidebar-link:hover {
          color: #60a5fa;
          text-shadow: 0 0 6px #3b82f6;
          background: rgba(59, 130, 246, 0.1);
        }

        .sidebar-link.logout-btn {
          color: #38bdf8;
          margin-top: auto;
        }

        .sidebar-link.logout-btn:hover {
          color: #0ea5e9;
          background: rgba(14, 165, 233, 0.1);
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
            <Link to="/dashboard" className="sidebar-link">
              <span className="icon">🏠</span>
              {!collapsed && <span className="text">Dashboard</span>}
            </Link>
            <Link to="/dashboard/upload" className="sidebar-link">
              <span className="icon">📤</span>
              {!collapsed && <span className="text">Upload Code</span>}
            </Link>
            <Link to="/dashboard/devscore" className="sidebar-link">
              <span className="icon">📊</span>
              {!collapsed && <span className="text">DevScore</span>}
            </Link>
            <Link to="/dashboard/analysis" className="sidebar-link">
              <span className="icon">🔍</span>
              {!collapsed && <span className="text">Analysis</span>}
            </Link>
            <Link to="/dashboard/coaching" className="sidebar-link">
              <span className="icon">👨‍🏫</span>
              {!collapsed && <span className="text">Coaching</span>}
            </Link>
            <Link to="/dashboard/leaderboard" className="sidebar-link">
              <span className="icon">🏆</span>
              {!collapsed && <span className="text">Leaderboard</span>}
            </Link>
            <button onClick={handleLogout} className="sidebar-link logout-btn">
              <span className="icon">🚪</span>
              {!collapsed && <span className="text">Logout</span>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
