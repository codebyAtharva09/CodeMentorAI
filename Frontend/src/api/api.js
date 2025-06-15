import axios from "axios";

const BASE_URL = "https://9302fa41-141f-4af5-8595-e5d98fcd6be5-00-1gg5uxwhu975n.sisko.replit.dev/";

export const loginUser = async (username, password) => {
  return username === "testuser" && password === "password123";
};

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
    console.error("Error uploading file:", error);
    throw error;
  }
};

export const getCoachingReport = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coach/generate`);
    return response.data;
  } catch (error) {
    console.error("Error getting coaching report:", error);
    throw error;
  }
};

export const getUserProgress = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/analyzer/progress`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user progress:", error);
    throw error;
  }
};
