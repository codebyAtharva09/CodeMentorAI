import axios from "axios";

const BASE_URL = "http://localhost:8000"; // Make sure backend is running here

export const loginUser = async (username, password) => {
  // Fake login for demo: username = testuser, password = password123
  return username === "testuser" && password === "password123";
};

export const uploadCodeFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const res = await axios.post(`${BASE_URL}/analyzer/analyze`, formData);
  return res.data;
};

export const getCoachingReport = async () => {
  const res = await axios.get(`${BASE_URL}/coach/generate`);
  return res.data;
};
console.log("loginUser loaded");
