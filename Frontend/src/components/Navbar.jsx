import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 50,
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    padding: "1rem 1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const brandStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1d4ed8", // blue-700
    letterSpacing: "0.05em",
    textDecoration: "none"
  };

  const brandSpanStyle = {
    color: "#60a5fa" // blue-400
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "1rem"
  };

  const linkStyle = {
    color: "#374151", // gray-700
    fontWeight: "500",
    textDecoration: "none"
  };

  const hoverStyle = {
    color: "#2563eb" // blue-600
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={brandStyle}>
        CodeMentor<span style={brandSpanStyle}>AI</span>
      </Link>
      <div style={linkContainerStyle}>
        <Link
          to="/login"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
        >
          Login
        </Link>
        <Link
          to="/register"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
