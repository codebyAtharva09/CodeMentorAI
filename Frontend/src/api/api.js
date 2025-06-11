import axios from "axios";

// ✅ Backend URL (update this if deploying)
const BASE_URL = "http://localhost:8000"; // Ensure backend is running at this address

// ✅ Simulated login (placeholder)
export const loginUser = async (username, password) => {
  return username === "testuser" && password === "password123";
};

// ✅ Upload code file to analyzer endpoint
export const uploadCodeFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      `${BASE_URL}/analyzer/analyze`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("❌ Upload error:", error);
    throw error;
  }
};

// ✅ Fetch coaching feedback after analysis
export const getCoachingReport = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coach/generate`);
    return response.data;
  } catch (error) {
    console.error("❌ Coaching fetch error:", error);
    throw error;
  }
};

console.log("✅ api.js loaded and connected to:", BASE_URL);
