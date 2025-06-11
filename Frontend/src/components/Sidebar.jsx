import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const styles = {
    sidebar: {
      width: "16rem",
      minHeight: "100vh",
      backgroundColor: "white",
      borderRight: "1px solid #E5E7EB",
      boxShadow: "0 0 5px rgba(0,0,0,0.05)",
      position: "sticky",
      top: 0,
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#1E3A8A", // blue-800
      marginBottom: "1.5rem",
    },
    link: {
      display: "block",
      color: "#374151", // gray-700
      fontWeight: "500",
      textDecoration: "none",
      marginBottom: "1rem",
    },
    linkHover: {
      color: "#2563EB", // blue-600 on hover
    },
    logoutButton: {
      color: "#DC2626", // red-600
      fontWeight: "600",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
    },
  };

  return (
    <div style={styles.sidebar}>
      <div>
        <h2 style={styles.title}>Dashboard</h2>
        <nav>
          <Link
            to="/dashboard"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
          >
            Upload & Analyze
          </Link>
          {/* Add more links here if needed */}
        </nav>
      </div>
      <button
        onClick={handleLogout}
        style={styles.logoutButton}
        onMouseEnter={(e) => (e.target.style.color = "#B91C1C")} // red-800
        onMouseLeave={(e) => (e.target.style.color = "#DC2626")}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
