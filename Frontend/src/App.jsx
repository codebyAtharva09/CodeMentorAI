import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";
import DevScorePage from "./pages/DevScorePage";
import AnalysisPage from "./pages/AnalysisPage";
import CoachingPage from "./pages/CoachingPage";

const App = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Dashboard with Nested Routes */}
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route path="upload" element={<UploadPage />} />
        <Route path="devscore" element={<DevScorePage />} />
        <Route path="analysis" element={<AnalysisPage />} />
        <Route path="coaching" element={<CoachingPage />} />
      </Route>
    </Routes>
  );
};

export default App;
