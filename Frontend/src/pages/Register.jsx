import React from "react";
import Navbar from "../components/Navbar";

const Register = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    padding: "1rem",
    background: "linear-gradient(to bottom right, white, #ebf8ff)",
  };

  const cardStyle = {
    backgroundColor: "white",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "1rem",
    padding: "2rem",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1e40af", // Tailwind's blue-800
    marginBottom: "1rem",
  };

  const textStyle = {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "1rem",
  };

  const credentialStyle = {
    fontWeight: "600",
    color: "#1d4ed8", // Tailwind's blue-700
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2 style={headingStyle}>Register</h2>
          <p style={textStyle}>
            Registration is disabled for now. Please use the test credentials below:
          </p>
          <p style={credentialStyle}>Username: testuser</p>
          <p style={credentialStyle}>Password: password123</p>
        </div>
      </div>
    </>
  );
};

export default Register;
